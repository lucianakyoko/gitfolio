import { Palette } from "lucide-react";

export function Template() {
  return (
    <section id="templates" className="scroll-mt-6">
      <div className="flex items-center mb-4">
        <Palette color="#0891b2" className="h-6 w-6 mr-2" />
        <h2 className="text-2xl font-bold">Temas</h2>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <p className="mb-4">
          O GitFollio oferece diversos modelos para exibir seu portfólio com estilos visuais variados. Você pode escolher um durante a criação do portfólio ou atualizando a configuração diretamente no seu repositório GitFollio.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className=" border border-blue-100 rounded-md overflow-hidden">
            <div className="p-3 text-center font-medium">Minimal</div>
            <div className="p-4">
              <p className="text-sm">
                Design limpo e focado, com o mínimo de distrações. Ideal para destacar seus projetos de forma direta e objetiva.
              </p>
            </div>
          </div>
          
          <div className=" border border-blue-100 rounded-md overflow-hidden">
            <div className="p-3 text-center font-medium">Modern</div>
            <div className="p-4">
              <p className="text-sm">
                Layout contemporâneo com componentes elegantes e animações suaves, oferecendo um visual moderno e refinado.
              </p>
            </div>
          </div>
          
          <div className=" border border-blue-100 rounded-md overflow-hidden">
            <div className="p-3 text-center font-medium">Creative</div>
            <div className="p-4">
              <p className="text-sm">
                Design ousado com elementos de layout únicos e efeitos visuais marcantes, ideal para profissionais criativos que querem se destacar.
              </p>
            </div>
          </div>
          
          <div className=" border border-blue-100 rounded-md overflow-hidden">
            <div className="p-3 text-center font-medium">Professional</div>
            <div className="p-4">
              <p className="text-sm">
                Visual sofisticado com tipografia elegante e layout estruturado, perfeito para contextos mais corporativos ou formais.
              </p>
            </div>
          </div>
          
          <div className=" border border-blue-100 rounded-md overflow-hidden">
            <div className="p-3 text-center font-medium">Dark</div>
            <div className="p-4">
              <p className="text-sm">
                Interface com tema escuro e elementos de alto contraste, ideal para desenvolvedores e entusiastas do modo noturno.
              </p>
            </div>
          </div>
          
          <div className=" border border-blue-100 rounded-md overflow-hidden">
            <div className="p-3 text-center font-medium">Cyberpunk</div>
            <div className="p-4">
              <p className="text-sm">
                Estilo futurista com cores neon vibrantes, contrastes fortes e estética inspirada em tecnologia urbana e ficção científica. Perfeito para quem quer um visual impactante, com vibe tech rebelde e atmosfera digital intensa.
              </p>
            </div>
          </div>
        </div>
        
        <p className="text-sm bg-yellow-50 p-4 rounded-md">
          <strong>Observação:</strong> Todos os modelos são responsivos e funcionam bem em qualquer tamanho de tela.
        </p>
      </div>
    </section>
  )
}