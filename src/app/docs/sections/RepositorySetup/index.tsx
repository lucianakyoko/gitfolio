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
            <h3 className="font-semibold text-lg mb-2">1. Crie o Repositório GitFolio</h3>
            <p>Crie um novo repositório público no GitHub com o nome exatamente igual a <code className="bg-gray-100 px-2 py-1 rounded">GitFolio</code>.</p>
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
  "name": "Seu Nome",
  "tagline": "Software Developer & Designer",
  "about": "Uma breve descrição sobre você",
  "template": "minimal",
  "primaryColor": "#3498db",
  "technologies": ["JavaScript", "React", "Node.js"],
  "contact": {
    "email": "seu.email@example.com",
    "linkedin": "seu-linkedin-url",
    "website": "seu-website-url"
  },
  "showForks": false,
  "featuredProjects": ["project-name-1", "project-name-2"]
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
          <CollapsibleTrigger className="flex w-full items-center justify-between p-4 text-left font-medium">
            <span>Campos de Configuração Explicados</span>
            <span className="text-sm text-gitfolio-slate">{openSections['config-fields'] ? 'Ocultar' : 'Mostrar'}</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 border-t border-blue-300">
            <ul className="space-y-2">
              <li><strong>name:</strong> Seu nome</li>
              <li><strong>tagline:</strong> Uma frase curta descrevendo o que você faz</li>
              <li><strong>about:</strong> Uma descrição mais longa sobre você</li>
              <li><strong>template:</strong> Nome do template (minimal, modern, creative, professional, dark)</li>
              <li><strong>primaryColor:</strong> Cor principal do tema do seu portfólio</li>
              <li><strong>technologies:</strong> Lista das tecnologias com as quais você trabalha</li>
              <li><strong>contact:</strong> Objeto contendo as suas informações de contato</li>
              <li><strong>featuredProjects:</strong>  Lista com os nomes dos repositórios que você quer destacar</li>
            </ul>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  )
}