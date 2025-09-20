import { internalApi } from "@/lib/axios";

export async function fetchGitFolioConfig(username: string) {
  try {
    const { data } = await internalApi.get(`/api/gitfolio/${username}`);
    const readmeText = data.readme;

    const match = readmeText.match(
      /<!--\s*GitFolio:start([\s\S]*?)GitFolio:end\s*-->/m
    );

    if (!match) {
      console.warn("Configuração GitFolio não encontrada no README.md");
      return null;
    }

    return JSON.parse(match[1].trim());
  } catch (error) {
    console.error("Erro ao buscar configuração GitFolio:", error);
    return null;
  }
}
