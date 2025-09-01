'use client'

import { createContext, useContext, useState } from "react";

type ThemeConfigData = {
  name: string,
  email: string;
  tagline: string;
  website: string
  githubUser: string;
  linkedinUser: string;
  about: string;
  tech: string[];
  showStars: boolean;
  showFollowers: boolean;
  projects: { 
    id: number;
    repoName: string; 
    url: string; 
    stars: number; 
    description?: string;
    image?: string; 
    techs?: string[]; 
    deploy?: string;
    highlighted?: boolean;
  }[];
}

type ThemeConfigDataProps = {
  data: ThemeConfigData;
  updateData: (newData: Partial<ThemeConfigData>) => void;
}

const defaultValues: ThemeConfigData = {
  name: '',
  email: '',
  tagline: '',
  website: '',
  githubUser: '',
  linkedinUser: '',
  about: '',
  tech: [],
  projects: [],
  showStars: true,
  showFollowers: true,
}

const ThemeConfigContext = createContext<ThemeConfigDataProps | undefined>(undefined);

export const ThemeConfigProvider = ({ children }: { children: React.ReactNode }) => {
  const [ data, setData ] = useState<ThemeConfigData>(defaultValues);

  const updateData = (newData: Partial<ThemeConfigData>) => {
    console.log('Updating data with:', newData);
    setData(prev => ({
      ...prev,
      ...newData,
    }));
  };

  console.log("configuração ==> ", data)

  return (
    <ThemeConfigContext.Provider value={{ data, updateData }}>
      { children }
    </ThemeConfigContext.Provider>
  )
};

export const useThemeConfig = () => {
  const context = useContext(ThemeConfigContext);

  if(!context) {
    throw new Error('useThemeConfig must be used within a ThemeConfigProvider');
  }
  return context;
}