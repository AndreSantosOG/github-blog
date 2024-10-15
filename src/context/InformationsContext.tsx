import { createContext, useState, ReactNode, useEffect } from 'react'

interface UserData {
  login: string
  id: number
  avatar_url: string
  company: string
  html_url: string
  followers: number
  following: number
  public_repos: number
  bio: string
  name: string
}

interface InformationsContextProps {
  userData: UserData
}

export const InformationsContext = createContext<InformationsContextProps>({
  userData: {
    login: '',
    id: 0,
    avatar_url: '',
    company: '',
    html_url: '',
    followers: 0,
    following: 0,
    public_repos: 0,
    bio: '',
    name: '',
  },
})

export const InformationsProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<UserData>({
    login: '',
    id: 0,
    avatar_url: '',
    company: '',
    html_url: '',
    followers: 0,
    following: 0,
    public_repos: 0,
    bio: '',
    name: '',
  })
  const token =
    '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'
  useEffect(() => {
    fetch('https://api.github.com/users/AndreSantosOG', {
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
      .then((data) => setUserData(data))
      .catch((error) => console.error('Error:', error))
  }, [])

  return (
    <InformationsContext.Provider value={{ userData }}>
      {children}
    </InformationsContext.Provider>
  )
}
