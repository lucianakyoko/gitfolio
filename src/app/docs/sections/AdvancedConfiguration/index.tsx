'use client'

import { Code2 } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

export function AdvancedConfiguration () {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  
  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <section id="configuration" className="scroll-mt-6">
      <div className="flex items-center mb-4">
        <Code2 color="#0891b2" className="h-6 w-6 mr-2" />
        <h2 className="text-2xl font-bold">Configuração Avançada</h2>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <p className="mb-4">
          Você pode personalizar ainda mais o seu portfólio do GitFolio ajustando configurações adicionais no seu arquivo README:
        </p>
        
        <Collapsible 
          open={openSections['featured-projects']} 
          onOpenChange={() => toggleSection('featured-projects')}
          className="border border-blue-100 rounded-md overflow-hidden mb-4"
        >
          <CollapsibleTrigger className="flex w-full items-center justify-between p-4 text-left font-medium">
            <span>Projetos em Destaque</span>
            <span className="text-sm ">{openSections['featured-projects'] ? 'Ocultar' : 'Mostrar'}</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 border-t border-blue-300">
            <p className="mb-3">
              Você pode destacar projetos específicos no topo do seu portfólio adicionando-os ao array &quot;featuredProjects&quot;:
            </p>
            <div className="bg-gray-800 text-white p-3 rounded-md overflow-x-auto text-sm">
              <pre>{`"featuredProjects": ["awesome-project", "cool-app", "useful-tool"]`}</pre>
            </div>
            <p className="mt-3 text-sm">
              Use o nome exato do repositório conforme aparece no GitHub para garantir a correspondência correta.
            </p>
          </CollapsibleContent>
        </Collapsible>
        
        <Collapsible 
          open={openSections['custom-colors']} 
          onOpenChange={() => toggleSection('custom-colors')}
          className="border border-blue-100 rounded-md overflow-hidden"
        >
          <CollapsibleTrigger className="flex w-full items-center justify-between p-4 text-left font-medium">
            <span>Cor Personalizada</span>
            <span className="text-sm">{openSections['custom-colors'] ? 'Ocultar' : 'Mostrar'}</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 border-t border-blue-300">
            <p className="mb-3">
              Personalize a cor principal do seu portfólio:
            </p>
            <div className="bg-gray-800 text-white p-3 rounded-md overflow-x-auto text-sm">
              <pre>{`"primaryColor": "#3498db"`}</pre>
            </div>
            <p className="mt-3 text-sm">
              Você pode usar qualquer código de cor hexadecimal válido. Essa cor será utilizada em botões, links e detalhes em todo o seu portfólio.
            </p>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  )
}