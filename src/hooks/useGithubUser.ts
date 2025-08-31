import { useQuery } from "@tanstack/react-query";
import { fetchGithubRepos, fetchGithubUser } from "../services/github";

export function useGithubUser(username: string) {
  return useQuery({
    queryKey: ['github-user', username],
    queryFn: () => fetchGithubUser(username),
    enabled: false,
    retry: false,
  })
}

export function useGithubRepos(username: string) {
  return useQuery({
    queryKey: ['github-repos', username],
    queryFn: () => fetchGithubRepos(username),
    enabled: !!username,
    retry: false,
  })
}

