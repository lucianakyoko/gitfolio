/* eslint-disable react/no-unescaped-entities */
'use client'

import { useState } from "react";
import { PenSquare } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export function RepositorySetup() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  
  return (
    <section id="repository-setup" className="scroll-mt-6">
      <div className="flex items-center mb-4">
        <PenSquare color="#0891b2" className="h-6 w-6 mr-2" />
        <h2 className="text-2xl font-bold">Configuração do Repositório</h2>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <p className="mb-4">
          Para que seu portfólio seja exibido corretamente com o GitFolio, você precisa criar um repositório especial no GitHub:
        </p>
        <div className="mb-6 space-y-4">
          <div className="p-4 border border-blue-100 rounded-md">
            <h3 className="font-semibold text-lg mb-2">1. Crie o Repositório Especial</h3>
            <p>Crie um novo repositório público no GitHub com o nome exatamente igual ao <code className="bg-gray-100 px-2 py-1 rounded">seu nome de usuário</code> do Github.</p>
          </div>
          
          <div className="p-4 border border-blue-100 rounded-md">
            <h3 className="font-semibold text-lg mb-2">2. Adicione a Configuração no README</h3>
            <p className="mb-3">
              No arquivo README.md, adicione a configuração do seu portfólio entre as tags de comentário especiais do GitFolio:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <pre>{
                `# Your Portfolio Name

  <!-- GitFolio:start -->
  {
  gitfolio: "on",
  name: "Meu Nome",
  email: "meu.email@exemplo.com",
  tagline: "Software Developer & Designer",
  avatar_url: "https://link-meu-avatar",
  website: "https://meu-site.com.br"
  githubUser: "meuusuario",
  linkedinUser: "https://www.linkedin.com/in/meuusuario/",
  about: "Uma breve descrição sobre mim",
  tech: ["JavaScript", "React", "Node.js"],
  showStars: true,
  showFollowers: true,
  followers: 189,
  following: 99,
  themeId: "minimal",
  projects: { 
    id: 12345678,
    repoName: "meuProjeto", 
    url: "https://github.com/meuusuario/meuprojeto", 
    stars: 37, 
    description?: "Uma descrição sobre o projeto",
    image: https://link-da-image.com, 
    techs: ["Node.js", "Nest.JS", "TypeScript"], 
    deploy: https://link-do-projeto.com,
    highlighted: true,
  };
}
  <!-- GitFolio:end -->

  Restante do seu conteúdo README ...`
              }</pre>
            </div>
          </div>
        </div>
        <Collapsible 
          open={openSections['config-fields']} 
          onOpenChange={() => toggleSection('config-fields')}
          className="border border-blue-100 rounded-md overflow-hidden"
        >
          <CollapsibleTrigger className="cursor-pointer flex w-full items-center justify-between p-4 text-left font-medium">
            <span>Campos de Configuração Explicados</span>
            <span className="text-sm text-gitfolio-slate">{openSections['config-fields'] ? 'Ocultar' : 'Mostrar'}</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 border-t border-blue-300">
            <ul className="space-y-2">
              <li><strong>gitfolio:</strong> Opções: "on" ou off"".</li>
              <li><strong>name:</strong> Seu nome.</li>
              <li><strong>email:</strong> Seu e-mail.</li>
              <li><strong>tagline:</strong> Uma frase curta descrevendo o que você faz.</li>
              <li><strong>avatar_url:</strong> Link da imagem do seu avatar.</li>
              <li><strong>website:</strong> Link do seu site.</li>
              <li><strong>githubUser:</strong> Seu usuário no GitHub.</li>
              <li><strong>linkedinUser:</strong> Link do seu LinkedIn.</li>
              <li><strong>about:</strong> Uma descrição mais longa sobre você.</li>
              <li><strong>tech:</strong> Lista de tecnologias que você utiliza no dia a dia.</li>
              <li><strong>showStars:</strong> Opções: true ou false. Você pode exibir ou não os stars que recebeu.</li>
              <li><strong>showFollowers:</strong> Opções: true ou false. Você pode exibir ou não os seus seguidores.</li>
              <li><strong>themeId:</strong> Nome do tema (minimal, modern, creative, professional, dark)</li>
              <li><strong>projects:</strong> Lista de projetos que deseja exibir no GitFolio</li>
              <li><strong>id:</strong> Id do repositório.</li>
              <li><strong>repoName:</strong> Nome do repositório.</li>
              <li><strong>url:</strong> Link do repositório.</li>
              <li><strong>stars:</strong> Número de estrelas recebidas. Ficará visível somente se a opção showStars estiver como true.</li>
              <li><strong>description:</strong> Descrição do projeto</li>
              <li><strong>image:</strong> Thumbnail do projeto para aparecer no GitFolio.</li>
              <li><strong>techs:</strong> Lista das tecnologias utilizada no projto.</li>
              <li><strong>deploy:</strong> Link do projeto.</li>
              <li><strong>highlighted:</strong> Opções: true ou false. Define se o projeto receberá destaque ou não. É possível destacar até 3 projetos.</li>
            </ul>
          </CollapsibleContent>
        </Collapsible>
        <div className="text-sm mt-4 bg-yellow-50 p-4 rounded-md">
          OBS: Não se preocupe. Essas configurações não ficarão visíveis.
        </div>
      </div>
    </section>
  )
}