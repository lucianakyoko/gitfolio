import { CodeBlock } from "@/components/CodeBlock";
import { Header } from "../../Header";
import { useUser } from "@/contexts/UserContext";

export function CopyContentSection() {
  const {user, username} = useUser()
  if (!user) return null

  const content = `
  Acesse meu portfólio em: 
  <a href="https://gitfolio.vercel.app/${username}">https://gitfolio.vercel.app/${username}</a>

    <!-- GitFolio:start -->
    {
      "gitfolio": "on",
      "name": "${user.name || ""}",
      "avatar_url": "${user.avatar_url || ""}",
      "template": "${user.templateId || "default"}",
      "tagline": "${user.tagline || ""}",
      "contact": {
        "email": "${user.email || ""}",
        "website": "${user.website || ""}"
      },
      "about": "${user.about || ""}",
      "projects": ${JSON.stringify(user.projects?.split(",").map(p => p.trim()) || [], null, 2)},
      "technologies": ${JSON.stringify(user.tech?.split(",").map(t => t.trim()) || [], null, 2)}
    }
    <!-- GitFolio:end -->
  `;

  return (
    <section className="flex flex-col gap-4">
      <Header number={2} title="Copie o conteúdo do seu README.md" />
      <div className="flex flex-col gap-2 items-start">
        <CodeBlock content={content} />
      </div>
    </section>
  )
}


  