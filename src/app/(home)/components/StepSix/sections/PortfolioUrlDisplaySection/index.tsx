import { ExternalLink } from "lucide-react";
import { Header } from "../../Header";
import { useUser } from "@/contexts/UserContext";

export function PortfolioUrlDisplaySection() {
  const { user } = useUser()
  return (
    <section className=" w-full flex flex-col gap-4">
      <Header number={3} title="Finalize a configuração" />
        <p className="text-gray-600">
          Depois que o repositório for configurado, seu portfólio estará disponível em:
        </p>
        <div className="flex flex-col gap-4 justify-between items-start text-gray-600 py-4 px-8 border border-blue-100 rounded-md">
          <p>{`https://gitfollio.vercel.app/${user?.login}`}</p>
          <a 
            href={`https://gitfollio.vercel.app/${user?.login}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="py-1 px-3 flex items-center gap-2 border border-blue-100 rounded-md text-gray-500 cursor-pointer hover:bg-blue-50"
          >
            <ExternalLink className="h-4 w-4" />
            Visitar (após configuração)
          </a>
        </div>
    </section>
  )
}