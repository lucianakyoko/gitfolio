import { CodeBlock } from "@/components/CodeBlock"
import { Header } from "../../Header"
import { useUser } from "@/contexts/UserContext"
import { useThemeConfig } from "@/contexts/ThemeConfigContext"

export function CopyContentSection() {
  const { user } = useUser()
  const { data } = useThemeConfig()

  const formattedTechnologies = JSON.stringify(data.tech, null, 2)
  const formattedProjects = JSON.stringify(data.projects || [], null, 2)

  const content = `
Acesse meu portfólio em: 
<a href="https://gitfollio.vercel.app/${user?.login || data.githubUser || ''}"> 🔗
  https://gitfollio.vercel.app/${user?.login || data.githubUser || ''}
</a>

<!-- GitFolio:start
{
  "gitfolio": "on",
  "name": "${data.name || ''}",
  "email": "${data.email || ''}",
  "tagline": "${data.tagline || ''}",
  "avatar_url": "${data.avatar_url || ''}",
  "website": "${data.website || ''}",
  "githubUser": "${data.githubUser || ''}",
  "linkedinUser": "${data.linkedinUser || ''}",
  "about": "${data.about || ''}",
  "showStars": ${data.showStars ?? false},
  "showFollowers": ${data.showFollowers ?? false},
  "followers": ${data.followers ?? 0},
  "following": ${data.following ?? 0},
  "themeId": "${data.themeId || ''}",
  "tech": ${formattedTechnologies},
  "projects": ${formattedProjects}
}
GitFolio:end -->
  `;

  return (
    <section className="w-full flex flex-col gap-4">
      <Header number={2} title="Copie o conteúdo do seu README.md" />
      <p className="text-gray-600">
        Copie todo o conteúdo abaixo e cole dentro do arquivo README.md do seu <span className="font-semibold">repositório especial</span>
      </p>
      <p className="text-gray-600">
        Não se preocupe, as configurações não ficarão visíveis.
      </p>
      <CodeBlock content={content} />
      <div className="flex flex-col gap-2 items-center md:items-start"></div>
    </section>
  )
}
