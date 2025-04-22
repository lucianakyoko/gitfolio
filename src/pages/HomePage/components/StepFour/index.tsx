import { ArrowRight, Download, SquarePen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUser } from "@/contexts/UserContext";
import { downloadMarkdownConfig } from "@/utils/downloadConfig";
import { PortfolioRenderer } from "@/components/PortfolioRenderer";


type StepFourProps = {
  onPrevious: () => void
  onNext: () => void
}

export function StepFour({onPrevious, onNext}:StepFourProps ) {
  const { user } = useUser()
  if (!user) return null

  return (
    <div className="py-12 flex flex-col gap-7 items-center">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-3xl font-bold text-gray-600">Preview</h2>
        <div className="flex items-center gap-4">
          <Button 
            onClick={onPrevious}
            type="button" 
            className="bg-white text-gray-600 border border-blue-100 hover:bg-blue-100 cursor-pointer"
          >
            <SquarePen />
            Editar
          </Button>

          <Button 
            type="button" 
            className="bg-white text-gray-600 border border-blue-100  hover:bg-blue-100 cursor-pointer"
            onClick={() => downloadMarkdownConfig(user)}
          >
            <Download />
            Baixar Configurações
          </Button>
          <Button 
            type="submit" 
            className="bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
            onClick={() => onNext()}
          >
            <ArrowRight />
            Gerar Portifólio
          </Button>
        </div>
      </div>

      <div className="w-full max-w-5xl h-[600px] overflow-y-auto overflow-x-hidden rounded-2xl border border-blue-100 p-4 bg-white shadow-md relative">
        <PortfolioRenderer />
      </div>
    </div>
  )
}