import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactMarkdown from 'react-markdown'
import { Header } from '../../components/Header'
import { PostContainer } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import {
  faArrowLeft,
  faArrowUpRightFromSquare,
  faCalendarDays,
  faCommentDots,
} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

interface User {
  login: string
}
interface Issue {
  id: number
  title: string
  body: string
  user: User
  updated_at: string
  comments: number
  html_url: string
}
export function Post() {
  const [issues, setIssues] = useState<Issue | null>(null)
  const { id } = useParams()

  useEffect(() => {
    const token =
      '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'
    fetch(
      `https://api.github.com/repos/AndreSantosOG/github-blog/issues/${id}`,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      },
    )
      .then((response) => {
        console.log(response)
        if (!response.ok) {
          throw new Error('Erro ao carregar dados do usuário')
        }
        return response.json()
      })
      .then((data: Issue) => setIssues(data))
      .catch((error) => console.error('Error:', error))
  }, [id])
  console.log(issues)
  return (
    <PostContainer>
      <Header />
      <div className="containerTop">
        <div className="options">
          <a href="/">
            <FontAwesomeIcon icon={faArrowLeft} />
            VOLTAR
          </a>
          <a href={issues?.html_url} target="_blank" rel="noreferrer">
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <h1>{issues?.title}</h1>
        <div className="informationsPost">
          <span>
            <FontAwesomeIcon icon={faGithub} className="icon-small" />
            <p>{issues?.user?.login}</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDays} />
            <p>
              {issues?.updated_at
                ? formatDistanceToNow(new Date(issues.updated_at), {
                    locale: ptBR,
                    addSuffix: true,
                  })
                : ''}
            </p>
          </span>
          <span>
            <FontAwesomeIcon icon={faCommentDots} />
            <p>{issues?.comments} comentários</p>
          </span>
        </div>
      </div>
      <div className="containerMain">
        <ReactMarkdown>{issues?.body}</ReactMarkdown>
      </div>
    </PostContainer>
  )
}
