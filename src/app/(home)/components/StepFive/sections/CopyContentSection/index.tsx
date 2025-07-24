import { CodeBlock } from "@/components/CodeBlock";
import { Header } from "../../Header";

export function CopyContentSection() {
  const username = 'lucianakyoko';

  const content = `
    Acesse meu portfólio em: 
    <a href="https://gitfolio.vercel.app/${username}">https://gitfolio.vercel.app/${username}</a>

    <!-- GitFolio:start -->
    {
      "gitfolio": "on",
      "name": "Luciana Kyoko",
      "avatar_url": "https://github.com/lucianakyoko.png",
      "template": "default"",
      "tagline": "",
      "contact": {
        "email": "email@email.com",
        "website": "https://www.meusite.com.br"
      },
      "about": "Algo sobre mim",
      "projects":,
      "technologies": 
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