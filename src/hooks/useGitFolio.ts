import { useQuery } from '@tanstack/react-query';
import { fetchGitFolioConfig } from '../services/gitfolio';

export interface GitFolioConfig {
  gitfolio: "on" | "off";
  name: string;
  email: string;
  tagline: string;
  avatar_url: string;
  website: string;
  githubUser: string;
  linkedinUser: string;
  about: string;
  showStars: boolean;
  showFollowers: boolean;
  followers: number;
  following: number;
  themeId: string;
  tech: string[];
  projects: Array<{
    id: number;
    repoName: string;
    url: string;
    stars: number;
    description: string;
    image: string;
    techs: string[];
    deploy: string;
    highlighted: boolean;
  }>;
}

const useGitFolio = (username: string) => {
  return useQuery<GitFolioConfig | null>({
    queryKey: ['gitFolio', username],
    queryFn: () => fetchGitFolioConfig(username),
    enabled: !!username,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false
  });
};

export default useGitFolio;