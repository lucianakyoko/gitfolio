import { Terminal } from "lucide-react";

export function GettingStarted() {
  return (
    <section id="getting-started" className="scroll-mt-6">
      <div className="flex items-center mb-4">
        <Terminal color="#0891b2" className="h-6 w-6 text-gitfolio-teal mr-2" />
        <h2 className="text-2xl font-bold">Primeiros Passos</h2>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <p className="mb-4">
          O GitFolio permite que você crie um portfólio bonito a partir dos seus repositórios do GitHub em apenas alguns passos simples:
        </p>
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Digite seu nome de usuário do GitHub</strong> na página inicial do GitFolio para buscar suas informações de perfil.
          </li>
          <li>
            <strong>Escolha um dos templates</strong> disponíveis para o seu portfólio.
          </li>
          <li>
            <strong>Personalize o portfólio</strong> com seu nome, frase de destaque (tagline), cores e outras informações.
          </li>
          <li>
            <strong>Visualize uma prévia do seu portfólio</strong> para ver como ele ficará.
          </li>
          <li>
            <strong>Crie um repositório chamado GitFolio </strong>no seu GitHub com o conteúdo de README fornecido.
          </li>
        </ol>
        <div className="mt-6 p-4 bg-blue-50 rounded-md">
          <p className="text-sm text-gitfolio-slate">
            <strong>Observação:</strong> O GitFolio utiliza os arquivos README.md dos seus repositórios para reunir informações sobre seus projetos. Certifique-se de que seus projetos mais importantes tenham READMEs bem documentados.
          </p>
        </div>
      </div>
    </section>
  )
}