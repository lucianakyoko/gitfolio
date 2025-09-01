import { CodeBlock } from "@/components/CodeBlock"
import { Header } from "../../Header"
import { useUser } from "@/contexts/UserContext"
import { useThemeConfig } from "@/contexts/ThemeConfigContext"
import { useTheme } from "@/contexts/ThemeContext"

export function CopyContentSection() {
  const { user } = useUser()
  const { data } = useThemeConfig()
  const { theme } = useTheme()

  const formattedTechnologies = JSON.stringify(data.tech, null, 2)
  const formattedProjects = JSON.stringify(data.projects || [], null, 2)

  const content = `
    Acesse meu portfólio em: 
    <a href="https://gitfolio.vercel.app/${user?.login}">
      https://gitfolio.vercel.app/${user?.login}
    </a>

    <!-- GitFolio:start -->
    {
      "gitfolio": "on",
      "name": "${data.name}",
      "avatar_url": "${user?.avatar_url || ''}",
      "theme": "${theme}",
      "tagline": "${data.tagline}",
      "contact": {
        "email": "${data.email}",
        "website": "${data.website}",
        "linkedin": "${data.linkedinUser}",
        "github": "${data.githubUser}"
      },
      "about": "${data.about}",
      "technologies": ${formattedTechnologies},
      "showStars": ${data.showStars},
      "showFollowers": ${data.showFollowers},
      "projects": ${formattedProjects}
    }
    <!-- GitFolio:end -->
  `

  return (
    <section className="w-full flex flex-col gap-4">
      <Header number={2} title="Copie o conteúdo do seu README.md" />
      <p className="text-gray-600">
        Copie todo o conteúdo abaixo e cole dentro do arquivo README.md do seu repositório GitFolio
      </p>
      <CodeBlock content={content} />
      <div className="flex flex-col gap-2 items-center md:items-start"></div>
    </section>
  )
}
