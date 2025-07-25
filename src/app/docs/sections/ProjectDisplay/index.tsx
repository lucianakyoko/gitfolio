import { Code2 } from "lucide-react";

export function ProjectDisplay() {
  return(
    <section id="project-display" className="scroll-mt-6">
    <div className="flex items-center mb-4">
      <Code2 color="#0891b2" className="h-6 w-6 mr-2" />
      <h2 className="text-2xl font-bold">Exibição de Projetos</h2>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <p className="mb-4">
        O GitFolio permite que você personalize como cada projeto será exibido no seu portfólio, adicionando comentários especiais ao arquivo README.md de cada repositório:
      </p>
      
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-3">Comandos GitFolio</h3>
        <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
          <pre>{`## My Awesome Project

 <!-- GitFolio:start -->
 {
  "display-repo": true,
  "project-title": "Projeto XYZ",
  "project-description": "Uma pequena descrição sobre este projeto",
  "gitfolio-cover": ./assets/cover-image.jpg
  "gitfolio-preview-url": https://my-project-demo.com
 }
 <!-- GitFolio:start -->

Rest of your README content...`}</pre>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="p-4 border border-blue-100 rounded-md">
          <h4 className="font-medium mb-1">display-repo</h4>
          <p className="text-sm">
            Controla se o repositório será exibido ou não no seu portfólio.
          </p>
          <p className="text-sm mt-2">
            <strong>Valores:</strong> <code className="bg-gray-100 px-1 rounded">true</code> ou <code className="bg-gray-100 px-1 rounded">false</code>
          </p>
          <p className="text-sm mt-2">
            <strong>Padrão:</strong> Se omitido, os repositórios serão exibidos com base nas configurações globais.
          </p>
        </div>
        
        <div className="p-4 border border-blue-100 rounded-md">
          <h4 className="font-medium mb-1">project-title</h4>
            <p className="text-sm">
              Define o título/nome do projeto a ser exibido no portfólio.
            </p>
            <p className="text-sm mt-2">
              <strong>Exemplo:</strong> Meu Projeto XYZ.
            </p>
        </div>

        <div className="p-4 border border-blue-100 rounded-md">
          <h4 className="font-medium mb-1">project-description</h4>
            <p className="text-sm">
              Define uma breve descrição do projeto.
            </p>
            <p className="text-sm mt-2">
              <strong>Exemplo:</strong> Uma pequena descrição sobre este projeto.
            </p>
        </div>

        <div className="p-4 border border-blue-100 rounded-md">
          <h4 className="font-medium mb-1">gitfolio-cover</h4>
          <p className="text-sm">
            Define uma imagem de capa para o projeto exibido no portfólio.
          </p>
          <p className="text-sm mt-2">
            <strong>Valor:</strong> Caminho para uma imagem no repositório ou uma URL externa.
          </p>
          <div className="text-sm mt-2">
            <strong>Exemplos:</strong>
            <ul className="list-disc pl-5 mt-1">
              <li><code className="bg-gray-100 px-1 rounded">./assets/cover.jpg</code> (caminho relativo à raiz do repositório)</li>
              <li><code className="bg-gray-100 px-1 rounded">https://example.com/images/cover.png</code> (URL externa)</li>
            </ul>
          </div>
        </div>
        
        <div className="p-4 border border-blue-100 rounded-md">
          <h4 className="font-medium mb-1">gitfolio-preview-url</h4>
          <p className="text-sm">
            Adiciona um link para uma demonstração ao vivo ou prévia do seu projeto.
          </p>
          <p className="text-sm mt-2">
            <strong>Valor:</strong> URL da demo ou prévia.
          </p>
          <p className="text-sm mt-2">
            <strong>Exemplo:</strong> <code className="bg-gray-100 px-1 rounded">https://my-project.netlify.app</code>
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}