import { createContext, ReactNode, useContext, useState } from "react";
import { UserData } from "../types";

interface UserContextProps {
  user: UserData | null
  setUser: (user: UserData) => void
  setTemplateId: (templateId: string) => void
  updateUser: (updates: Partial<UserData>) => void
  setUsername: (value: string) => void
  username: string
}

const UserContext = createContext<UserContextProps | undefined>(undefined)

export function UserProvider({ children }: {children: ReactNode}) {
  const [ user, setUser ] = useState<UserData | null>(null)
  const [username, setUsername] = useState<string>('')

  const setTemplateId = (templateId: string) => {
    setUser(prev => prev ? {...prev, templateId} : null)
  }

  const updateUser = (updates: Partial<UserData>) => {
    setUser(prev => prev ? {...prev, ...updates} : null)
  }

  return (
    <UserContext.Provider value={{user, setUser, setTemplateId, updateUser, setUsername, username}}>
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