import { Input,  } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, LoaderCircle } from 'lucide-react';
import { useState } from "react";
import { useGithubUser } from "@/hooks/useGithubUser";
import { useUser } from "@/contexts/UserContext";

type StepOneProps = {
  onNext: () => void
}

export function StepOne({onNext}: StepOneProps) {
  const [username, setUsername] = useState<string>('')
  const {data, isLoading, refetch} = useGithubUser(username)
  const {setUser} = useUser()

  const handleNextStep = async () => {
    const response = await refetch()

    if(response.isSuccess && response.data) {
      setUser(response.data)
      onNext()
    }
  }

  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-4xl font-black text-blue-300">GitFolio</h1>
          <h2 className="text-2xl font-semibold text-gray-600">Mostre seus projetos do GitHub com um portfólio simples e rápido</h2>
        </div>

        <div className="flex w-full max-w-sm items-center space-x-2 p-1.5 border border-gray-100 rounded-md">
          <div className="w-5 h-5">
            <img className="w-full h-full" src="/github.svg" alt="Logo Github" />
          </div>
          <Input 
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Insira o seu usuário do Github"
            className="border-0 bg-blue-50 rounded-md !border-none !ring-0 !outline-none focus:!outline-none focus:!ring-0 focus:!border-none"
          />
          <Button 
            onClick={handleNextStep}
            disabled={isLoading || username.trim().length === 0}
            type="button" 
            className="bg-blue-400 text-white hover:bg-blue-500 cursor-pointer"
          >
            {!isLoading ? 'Gerar' : 'Carregando...'}
            {!isLoading ? <ArrowRight /> : <LoaderCircle className="animate-spin"/>}
          </Button>
        </div>
        {
          username.length > 0 && !isLoading && !data && (
            <p className="text-sm text-red-500 mt-2">Usuário não encontrado no GitHub</p>
          )
        }
      </div>


      <div className="text-gray-600 flex items-start gap-8 justify-center">
        <div className="w-52 flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="font-bold text-blue-300 text-2xl">1</span>
            <p className="font-semibold text-md">Conecte seu Github</p>
          </div>
          <p>Digite seu nome de usuário do GitHub para buscar seus repositórios e perfil</p>
        </div>

        <div className="w-52 flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="font-bold text-blue-300 text-2xl">2</span>
            <p className="font-semibold text-md">Personalize</p>
          </div>
          <p>Escolha entre modelos e personalize seu portfólio</p>
        </div>

        <div className="w-52 flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="font-bold text-blue-300 text-2xl">3</span>
            <p className="font-semibold text-md">Gere e Publique</p>
          </div>
          <p>Crie um repositório GitFolio e seu portfólio estará disponível em gitfolio.com/seu-usuario</p>
        </div>
      </div>
    </div>
  )
}