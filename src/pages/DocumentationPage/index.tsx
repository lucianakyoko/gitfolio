import { ArrowLeft, BookOpen } from "lucide-react";
import { GettingStarted } from "./sections/GettingStarted";
import { RepositorySetup } from "./sections/RepositorySetup";
import { ProjectDisplay } from "./sections/ProjectDisplay";
import { AdvancedConfiguration } from "./sections/AdvancedConfiguration";
import { Template } from "./sections/Template";
import { Faq } from "./sections/Faq";

export function DocumentationPage() {
  return (
    <>
      <header className="bg-blue-950 py-4 flex flex-col gap-8">
        <div className="flex items-center justify-between px-20">
          <a href="/" className="flex items-center gap-2 py-1 px-3 text-white">
            <ArrowLeft />
            Voltar
          </a>

          <a 
            href="https://github.com/lucianakyoko/gitfolio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-blue-100 py-1.5 px-2 rounded-lg hover:bg-blue-100 bg-blue-50"
          >
            <img 
              src="/github.svg" 
              alt="logo Github" 
              className="w-4 h-4"
            />
            Github
          </a>

        </div>

        <div className="flex flex-col gap-2 items-center pb-12">
          <BookOpen color="#FFFFFF" className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white">Documentação Gitfolio</h2>
          <p className="text-xl text-white">Aprenda como usar o Gitfolio para criar seu portifólio em minutos</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto py-8 px-4 md:px-8 relative text-blue-950">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="sticky top-8 self-start h-fit">
            <h2 className="font-bold text-lg mb-4 text-blue-950">Contents</h2>
            <ul className="space-y-3">
              <li>
                <a href="#getting-started" className="text-cyan-600 hover:underline">Primeiros Passos</a>
              </li>
              <li>
                <a href="#repository-setup" className="text-cyan-600 hover:underline">Configurações do Repositório</a>
              </li>
              <li>
                <a href="#configuration" className="text-cyan-600 hover:underline">Configuração Avançada</a>
              </li>
              <li>
                <a href="#templates" className="text-cyan-600 hover:underline">Temas</a>
              </li>
              <li>
                <a href="#project-display" className="text-cyan-600 hover:underline">Exibição de Projetos</a>
              </li>
              <li>
                <a href="#faqs" className="text-cyan-600 hover:underline">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-12">
            <GettingStarted />
            <RepositorySetup />
            <AdvancedConfiguration />
            <Template />
            <ProjectDisplay />
            <Faq />
          </div>
        </div>
      </main>
    </>
  )
}
