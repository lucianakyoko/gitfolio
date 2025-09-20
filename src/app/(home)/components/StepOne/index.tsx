'use client'

import NextImage from 'next/image';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, LoaderCircle } from 'lucide-react';
import { useGithubUser } from '@/hooks/useGithubUser';
import { useUser } from '@/contexts/UserContext';

type StepOneProps = {
  setStep: (number: number) => void;
}
export function StepOne({ setStep }: StepOneProps) {
  const [ userName, setUserName ] = useState('');
  const { setUser } = useUser();
  const { isLoading, error, refetch } = useGithubUser(userName);

   const handleFetchUser = async () => {
    if (!userName.trim()) return
    const result = await refetch()
    if (result.data) {
      setUser(result.data);
      setStep(2)
    }
  }

  return (
    <div className='flex flex-col gap-20'>
      <div className='flex flex-col gap-8 items-center'>
        <div className='flex flex-col gap-3 items-center'>
          <h1 className="text-4xl font-black text-blue-300">Gitfollio</h1>
          <h2 className="text-2xl font-semibold text-gray-600">Mostre seus projetos do GitHub com um portfólio simples e rápido</h2>
        </div>

        <div className='flex w-full max-w-sm items-center space-x-2 p-1.5 border border-gray-100 rounded-md'>
          <div className="w-6 h-6">
            <NextImage src="/github.svg" alt="Logo do Github" width={40} height={40}/>
          </div>
          <Input 
            type='text'
            value= {userName}
            onChange={e => setUserName(e.target.value)}
            placeholder='Insira o seu usuário do Github'
            className='border-0 bg-blue-50 rounded-md !border-none !ring-0 !outline-none focus:!outline-none focus:!ring-0 focus:!border-none'
          />
          <Button
            onClick={ handleFetchUser }
            className="bg-blue-400 text-white hover:bg-blue-500 cursor-pointer"
            type='button'
            disabled={isLoading || userName.length <= 0}
            >
            {isLoading 
              ? <LoaderCircle className='animate-spin' />
              : <ArrowRight />
            }
          </Button>
        </div>
          {error && (
            <span className='text-red-500 flex items-center gap-2'>
              Usuário não encontrato.
            </span>
          )}
      </div>

      <div className="text-gray-600 flex items-start gap-8 justify-center">
        <div className="w-52 flex flex-col items-center gap-4">
          <div className="flex flex-col items-center">
            <span className="font-bold text-blue-300 text-2xl">1</span>
            <p className="font-semibold text-md">Conecte seu Github</p>
          </div>
          <p className='text-center'>Digite seu nome de usuário do GitHub para buscar seus repositórios e perfil</p>
        </div>

        <div className="w-52 flex flex-col items-center gap-4">
          <div className="flex flex-col items-center">
            <span className="font-bold text-blue-300 text-2xl">2</span>
            <p className="font-semibold text-md">Personalize</p>
          </div>
          <p className='text-center'>Escolha entre modelos e personalize seu portfólio</p>
        </div>

        <div className="w-52 flex flex-col items-center gap-4">
          <div className="flex flex-col items-center">
            <span className="font-bold text-blue-300 text-2xl">3</span>
            <p className="font-semibold text-md">Gere e Publique</p>
          </div>
          <p className='text-center'>Adicione as configurações no seu repositório especial e seu Gitfollio estará disponível em <span className='text-sm'>gitfollio.vercel.app/seu-usuario</span></p>
        </div>
      </div>
    </div>
  )
}
