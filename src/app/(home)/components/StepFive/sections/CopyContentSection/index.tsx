import { CodeBlock } from "@/components/CodeBlock";
import { Header } from "../../Header";
import { useUser } from "@/contexts/UserContext";
import { useThemeConfig } from "@/contexts/ThemeConfigContext";
import { useTheme } from "@/contexts/ThemeContext";

export function CopyContentSection() {
  const { user } = useUser();
  const { data } = useThemeConfig();
  const { theme } = useTheme();

  const username = 'lucianakyoko';

  const formattedProjects = JSON.stringify(data.projects, null, 2);
  const formattedTechnologies = JSON.stringify(data.tech, null, 2);


  const content = `
    Acesse meu portfólio em: 
    <a href="https://gitfolio.vercel.app/${username}">
      https://gitfolio.vercel.app/${username}
    </a>

    <!-- GitFolio:start -->
    {
      "gitfolio": "on",
      "name": "${data.name}",
      "avatar_url": "${user?.avatar_url}",
      "theme": "${theme}",
      "tagline": "${data.tagline}",
      "contact": {
        "email": "${data.email}",
        "website": "${data.website}",
        "linkedin": "${data.linkedinUser}",
        "github": "${data.githubUser}"
      },
      "about": "${data.about}",
      "projects": ${formattedProjects},
      "technologies": ${formattedTechnologies},
      "showStars": ${data.showFollowers},
      "showFollowers": ${data.showStars} 
    }
    <!-- GitFolio:end -->
  `;

  return (
    <section className="w-full flex flex-col gap-4">
      <Header number={2} title="Copie o conteúdo do seu README.md" />
      <p className="text-gray-600">Copie todo o conteúdo baixo e cole dentro do arquivo README.md do seu repositório GitFolio</p>
      <CodeBlock content={content} />
      <div className="flex flex-col gap-2 items-center md:items-start">
      </div>
    </section>
  )
}