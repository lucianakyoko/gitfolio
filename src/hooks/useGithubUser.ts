import { useQuery } from "@tanstack/react-query";
import { fetchGithubUser } from "../services/github";

export function useGithubUser(username: string) {
  return useQuery({
    queryKey: ['github-user', username],
    queryFn: () => fetchGithubUser(username),
    enabled: false,
    retry: false,
  })
}
