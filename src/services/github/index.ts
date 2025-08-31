import { api } from "@/lib/axios";

export async function fetchGithubUser(username: string) {
  const { data } = await api.get(`/users/${username}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
    }
  });

  return data;
}

export async function fetchGithubRepos(username: string) {
  const { data } = await api.get(`/users/${username}/repos`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
    },
    params: {
      per_page: 100,
      sort: 'stars',
    },
  });
  return data;
}
