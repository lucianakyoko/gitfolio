'use client'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Link from "next/link";
import { useState } from "react";

export function Faq() {
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  
    const toggleSection = (section: string) => {
      setOpenSections((prev) => ({
        ...prev,
        [section]: !prev[section],
      }));
    };
    
  return (
    <section id="faqs" className="scroll-mt-6">
      <div className="flex items-center mb-4">
        <h2 className="text-2xl font-bold">Perguntas Frequentes</h2>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="space-y-4">
          <Collapsible 
            open={openSections['faq-1']} 
            onOpenChange={() => toggleSection('faq-1')}
            className="border border-blue-100 rounded-md overflow-hidden"
          >
            <CollapsibleTrigger className="cursor-pointer flex w-full items-center justify-between p-4 text-left font-medium">
              <span>Como o GitFolio acessa meus dados do GitHub?</span>
              <span className="text-sm">{openSections['faq-1'] ? 'Ocultar' : 'Mostrar'}</span>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 border-t border-blue-300">
              <p>
                O GitFolio utiliza a API pública do GitHub para buscar informações do seu perfil e repositórios.
                Ele acessa apenas dados públicos e não requer permissões especiais ou autenticação.
              </p>
            </CollapsibleContent>
          </Collapsible>
          
          <Collapsible 
            open={openSections['faq-2']} 
            onOpenChange={() => toggleSection('faq-2')}
            className="border border-blue-100 rounded-md overflow-hidden"
          >
            <CollapsibleTrigger className="cursor-pointer flex w-full items-center justify-between p-4 text-left font-medium">
              <span>Por que nem todos os meus repositórios estão aparecendo?</span>
              <span className="text-sm">{openSections['faq-2'] ? 'Ocultar' : 'Mostrar'}</span>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 border-t border-blue-300">
              <p className="mb-3">
                Isso pode acontecer por diversos motivos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>A API do GitHub limita o número de repositórios retornados (até 100 repositórios mais recentes)</li>
                <li>Repositórios privados não são acessíveis</li>
              </ul>
            </CollapsibleContent>
          </Collapsible>
          
          <Collapsible 
            open={openSections['faq-3']} 
            onOpenChange={() => toggleSection('faq-3')}
            className="border border-blue-100 rounded-md overflow-hidden"
          >
            <CollapsibleTrigger className="cursor-pointer flex w-full items-center justify-between p-4 text-left font-medium">
              <span>Posso personalizar o GitFolio além das opções fornecidas?</span>
              <span className="text-sm">{openSections['faq-3'] ? 'Ocultar' : 'Mostrar'}</span>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 border-t border-blue-300">
              <p>
                A versão atual do GitFolio permite personalização por meio de opções de configuração.
              </p>
            </CollapsibleContent>
          </Collapsible>
          
          <Collapsible 
            open={openSections['faq-4']} 
            onOpenChange={() => toggleSection('faq-4')}
            className="border border-blue-100 rounded-md overflow-hidden"
          >
            <CollapsibleTrigger className="cursor-pointer flex w-full items-center justify-between p-4 text-left font-medium">
              <span>Como posso atualizar meu GitFolio após criá-lo?</span>
              <span className="text-sm">{openSections['faq-4'] ? 'Ocultar' : 'Mostrar'}</span>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 border-t border-blue-300 flex flex-col gap-2">
              <p>
                Você pode atualizar seu GitFolio editando o arquivo `README.md` no repositório especial.
              </p>
              <p>
                Altere a configuração entre as tags `GitFolio:start` e `GitFolio:end`, e o portfólio será atualizado com essas mudanças.
              </p>
              <p>
                Você pode usar o <Link href='/'>wizard</Link> para gerar um novo bloco de configurações e substituir pelo anterior.
              </p>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  )
}