import { useContext, useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { HomeContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Publication } from './components/Publication'
import { InformationsContext } from '../../context/InformationsContext'

interface Issue {
  id: number
  title: string
  body: string
  updated_at: string
}

export function Home() {
  const { userData } = useContext(InformationsContext)
  const [issues, setIssues] = useState<Issue[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const token =
    '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'

  useEffect(() => {
    fetch(`https://api.github.com/repos/AndreSantosOG/github-blog/issues`, {
      headers: {
        Authorization: `token ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao carregar dados do usuário')
        }
        return response.json()
      })
      .then((data: Issue[]) => setIssues(data))
      .catch((error) => console.error('Error:', error))
  }, [])

  if (!userData) {
    return <div>Carregando...</div>
  }
  const filteredIssues = issues.filter((issue) =>
    issue.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )
  console.log(issues)
  return (
    <HomeContainer>
      <Header />
      <div className="profile">
        <img src={userData?.avatar_url} alt="" />
        <div className="profile-information">
          <h1>{userData?.name}</h1>
          <p>{userData?.bio}</p>
          <div className="profile-informationTwo">
            <p className="profile-details">
              <FontAwesomeIcon icon={faGithub} className="icon-small" />
              {userData?.login}
            </p>
            <p className="profile-details">
              <FontAwesomeIcon icon={faBuilding} className="icon-small" />
              {userData?.company}
            </p>
            <p className="profile-details">
              <FontAwesomeIcon icon={faUserGroup} className="icon-small" />
              {userData?.followers} Seguidores
            </p>
          </div>
        </div>
        <a href={userData?.html_url} target="_blank" rel="noreferrer">
          GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </div>
      <div className="search">
        <div className="inform">
          <p className="title">Publicações</p>
          <p className="numberPublications">
            <span>{issues.length}</span> publicações
          </p>
        </div>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="publications">
        {filteredIssues
          .slice()
          .reverse()
          .map((issue, index) => (
            <Publication
              key={issue.id}
              title={issue.title}
              body={issue.body}
              date={issue.updated_at}
              id={index + 1}
            />
          ))}
      </div>
    </HomeContainer>
  )
}
