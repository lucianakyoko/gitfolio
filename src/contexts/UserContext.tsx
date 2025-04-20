import { createContext, ReactNode, useContext, useState } from "react";

interface UserData {
  name: string
  avatar_url: string
  templateId?: string
}

interface UserContextProps {
  user: UserData | null
  setUser: (user: UserData) => void
  setTemplateId: (templateId: string) => void

}

const UserContext = createContext<UserContextProps | undefined>(undefined)

export function UserProvider({ children }: {children: ReactNode}) {
  const [ user, setUser ] = useState<UserData | null>(null)
  const setTemplateId = (templateId: string) => {
    setUser(prev => prev ? {...prev, templateId} : null)
  }


  return (
    <UserContext.Provider value={{user, setUser, setTemplateId}}>
      {children}
    </UserContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUser() {
  const context = useContext(UserContext)

  if(!context) throw new Error ('useUser deve estar dentro do UserProvider' )
  return context
}