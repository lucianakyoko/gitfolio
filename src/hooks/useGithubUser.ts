import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/axios";

export function useGithubUser(userName: string) {
  return useQuery({
    queryKey: ['github-user', userName],
    queryFn: async () => {
      const { data } = await api.get(`/users/${userName}`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
        }
      })
      return data
    },
    enabled: false,
    retry: false
  })
}