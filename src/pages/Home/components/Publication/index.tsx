import { PubliContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface PostProps {
  title: string
  body: string
  id: number
  date: string
}

export function Publication({ title, body, id, date }: PostProps) {
  return (
    <PubliContainer href={`/Post/${id}`}>
      <div className="title">
        <h1>{title}</h1>
        <span>
          {date
            ? formatDistanceToNow(new Date(date), {
                locale: ptBR,
                addSuffix: true,
              })
            : ''}
        </span>
      </div>
      <p className="teste">{body}</p>
    </PubliContainer>
  )
}
