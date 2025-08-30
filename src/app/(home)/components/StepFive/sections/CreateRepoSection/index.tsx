import { ExternalLink } from "lucide-react";
import { CodeBlock } from "@/components/CodeBlock";
import { Header } from "../../Header";

export function CreateRepoSection() {
  const createRepoInstructions = `
    1. Visite a página do GitHub: https://github.com/new
    2. Crie um novo repositório chamado 'GitFolio'
    3. Initialize com um README
    4. Copie o conteúdo do passo 2 (abaixo) dentro do arquivo README.md
    5. Faça o commit
  `;

  return (
    <section className="w-full flex flex-col gap-4">
      <Header number={1} title="Crie um novo repositório no GitHub"/>

      <div className="flex flex-col gap-2 items-end">
        <CodeBlock content={createRepoInstructions} />
        <a 
          className="w-fit py-1 px-3 flex items-center gap-2 border border-blue-100 rounded-md text-gray-500 cursor-pointer hover:bg-blue-50"
          href="https://github.com/new" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <ExternalLink className="h-4 w-4" />
          Abrir GitHub
        </a>
      </div>
    </section>
  )
}