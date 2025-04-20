import { createContext, ReactNode, useContext, useState } from "react";

interface UserData {
  name: string
  avatar_url: string
}

interface UserContextProps {
  user: UserData | null
  setUser: (user: UserData) => void
}

const UserContext = createContext<UserContextProps | undefined>(undefined)

export function UserProvider({ children }: {children: ReactNode}) {
  const [ user, setUser ] = useState<UserData | null>(null)

  return (
    <UserContext.Provider value={{user, setUser}}>
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