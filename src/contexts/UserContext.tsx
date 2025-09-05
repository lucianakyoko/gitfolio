'use client'

import { createContext, useContext, useState } from "react";

type GithubUser = {
  name: string;
  avatar_url: string;
  login: string;
  bio?: string;
  followers: number;
  following: number;
} | null;

type userContextType = {
  user: GithubUser;
  setUser: (user: GithubUser) => void;
};

const UserContext = createContext<userContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [ user, setUser ] = useState<GithubUser>(null);

  return(
    <UserContext.Provider value={{ user, setUser }}>
      { children }
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext);

  if(!context) throw new Error('useUser must be used within a UserProvider');
  return context;
}
