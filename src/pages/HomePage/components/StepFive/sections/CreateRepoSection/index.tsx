import { CodeBlock } from "@/components/CodeBlock";
import { Header } from "../../Header";
import { ExternalLink } from "lucide-react";

export function CreateRepoSection() {

  const createRepoInstructions = `
  1. Visit GitHub: https://github.com/new
  2. Create a new repository named 'GitFolio'
  3. Initialize with a README
  4. Paste the copied content into the README.md file
  5. Commit the changes
  `;
  

  return (
    <section className="flex flex-col gap-4">
      <Header number={1} title="Crie um novo repositório no GitHub" />
      <div className="flex flex-col gap-2 items-end">
        <CodeBlock 
          content={createRepoInstructions}
        />
        <a 
          href="https://github.com/new" 
          target="_blank" 
          rel="noopener noreferrer"
          className="py-1 px-3 flex items-center gap-2 border border-blue-100 rounded-md text-gray-500 cursor-pointer hover:bg-blue-50"
        >
        <ExternalLink className="h-4 w-4" />
        Abrir Github
        </a>
      </div>
    </section>
  )
}