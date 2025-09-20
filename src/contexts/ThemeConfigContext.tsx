'use client'

import { createContext, useContext, useState } from "react";

export type ThemeConfigData = {
  gitfolio?: "on" | "off",
  name: string,
  email: string;
  tagline: string;
  avatar_url: string;
  website: string
  githubUser: string;
  linkedinUser: string;
  about: string;
  tech: string[];
  showStars: boolean;
  showFollowers: boolean;
  followers: number;
  following: number;
  themeId: string;
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
  gitfolio: "on",
  name: '',
  email: '',
  tagline: '',
  avatar_url: '',
  website: '',
  githubUser: '',
  linkedinUser: '',
  about: '',
  showStars: true,
  showFollowers: true,
  followers: 0,
  following: 0,
  themeId: '',
  tech: [],
  projects: [],
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