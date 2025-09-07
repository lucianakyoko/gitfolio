import { ChevronRight, ExternalLink } from "lucide-react";
import { Header } from "../Header";
import { useUser } from "@/contexts/UserContext";

export function AddConfigCodeSection() {
  const { user } = useUser();

  return (
    <section className="w-full flex flex-col gap-4">
      <Header number={1} title="Crie um repositório especial no GitHub"/>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg text-cyan-500 font-bold flex">
            <ChevronRight />
            Cenário 1: Você ainda não possui o repositório especial
          </h3>
          <CreateSpecialRepoInstruction />
          <div className="flex flex-col gap-2 items-end">
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
        </div>
        
        <div className="flex flex-col gap-2">
          <h3 className="text-lg text-cyan-500 font-bold flex">
            <ChevronRight />
            Cenário 2: Você já possui o repositório especial
          </h3>
            <AddingConfigInstructions />
          <div className="flex flex-col gap-2 items-end">
            <a 
              className="w-fit py-1 px-3 flex items-center gap-2 border border-blue-100 rounded-md text-gray-500 cursor-pointer hover:bg-blue-50"
              href={`https://github.com/${user?.login}/${user?.login}/edit/main/README.md`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4" />
              Abrir GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function CreateSpecialRepoInstruction() { 
  return(
    <ol className="list-decimal list-outside pl-6 space-y-2 marker:font-semibold">
      <li>Visite a página do GitHub: 
        <a 
          className="hover:text-cyan-500 hover:font-bold font-bold" 
          href="https://github.com/new" 
          target="_blank" 
          rel="noopener noreferrer"> https://github.com/new
          </a>
        </li>
      <li>No campo Repository name, digite exatamente o seu username do GitHub.</li>
      <li>Esse repositório é especial, pois aparece diretamente no seu perfil do GitHub.</li>
      <li>Marque a opção “Add a README file”.</li>
      <li>Clique em Create repository.</li>
      <li>Abra o arquivo README.md criado automaticamente.</li>
      <li>Copie e cole o conteúdo gerado pelo GitFolio (no passo 2 da configuração).</li>
      <li>Faça o commit das alterações.</li>
    </ol>
  )
}

function AddingConfigInstructions() {
  const { user } = useUser();

  return(
    <ol className="list-decimal list-outside pl-6 space-y-2 marker:font-semibold">
      <li>Acesse seu repositório especial em: 
        <a 
          className="hover:text-cyan-500 hover:font-bold font-bold" 
          href={`https://github.com/${user?.login}/${user?.login}/edit/main/README.md`} 
          target="_blank" rel="noopener noreferrer"> {`https://github.com/${user?.login}/${user?.login}/edit/main/README.md`}
        </a>
      </li>
      <li>Edite o arquivo README.md existente.</li>
      <li>Copie e cole o conteúdo gerado pelo GitFolio (no passo 2 da configuração) dentro do README.md.</li>
      <li>Se já houver conteúdo, você pode adicionar abaixo do texto atual.</li>
      <li>Faça o commit das alterações.</li>
    </ol>
  )
}