import { CodeBlock } from "@/components/CodeBlock";
import { Header } from "../../Header";

export function CustomizeRepoSection() {
  const content = `
    <!--GitFolio:start-->
    {
      "display-repo": true,
      "project-title": "Projeto XYZ",
      "project-description": "Uma pequena descrição sobre este projeto",
      "project-cover": "https://url-da-imagem.com",
      "project-preview-url": "https://seu-projeto.com.br",
      "project-repo-url": "https://github.com/meuusuario/repositorio-do-seu-projeto"
      "technologies": [
        "React",
        "typescript",
        "node.js"
      ]
    }
    <!--GitFolio:end-->
  `

  return (
    <section className="flex flex-col gap-4">
      <Header number={3} title="Personalize a exibição dos seus repositórios" />
      <p className="text-gray-600">Adicione os comandos do GitFolio no arquivo README.md dos repositórios que você deseja mostrar no seu portfólio.</p>
      <p className="text-gray-600">Isso permite personalizar como cada projeto será exibido na sua página.</p>
      <div className="flex flex-col gap-2 items-start">
        <CodeBlock content={content} />
        <div className="space-y-2 text-sm text-gray-600">
          <p><strong>display-repo:</strong> Defina como &quot;true&quot; para incluir este repositório no seu portfólio (ou &quot;false&quot; para escondê-lo)</p>
          <p><strong>project-title:</strong> Título do seu projeto</p>
          <p><strong>project-description:</strong> Descrição do seu projeto</p>
          <p><strong>project-cover:</strong> Caminho da imagem de capa do projeto (pode ser um caminho relativo no repositório ou uma URL externa)</p>
          <p><strong>project-preview-url:</strong> Link para uma demonstração ou prévia do projeto</p>
          <p><strong>project-repo-url:</strong> Link do repositório do projeto</p>
          <p><strong>technologies:</strong> Lista de tecnologias que você utilizou para desenvolver este projeto</p>
        </div>
      </div>
    </section>
  )
}