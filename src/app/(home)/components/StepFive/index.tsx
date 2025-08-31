'use client'

import { ArrowRight, Download, Palette, SquarePen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PortfolioRenderer } from "@/components/PortfolioRenderer";
import { useTheme } from "@/contexts/ThemeContext";

type StepFoureProps = {
  setStep: (number: number) => void
}

export function StepFive({ setStep }: StepFoureProps) {
  const { theme } = useTheme();

  return(
    <div className="py-12 flex flex-col gap-7 items-center">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-3xl font-bold text-gray-600">Preview</h2>
        <div className="flex items-center flex-wrap gap-4">
          <Button 
            onClick={() => setStep(2)}
            type="button" 
            className="bg-white text-gray-600 border border-blue-100 hover:bg-blue-100 cursor-pointer"
          >
            <Palette />
            Escolher outro tema
          </Button>
          
          <Button 
            onClick={() => setStep(3)}
            type="button" 
            className="bg-white text-gray-600 border border-blue-100 hover:bg-blue-100 cursor-pointer"
          >
            <SquarePen />
            Editar
          </Button>

          <Button 
            type="button" 
            className="bg-white text-gray-600 border border-blue-100  hover:bg-blue-100 cursor-pointer"
            onClick={() => console.log('baixar configurações')}
          >
            <Download />
            Baixar Configurações
          </Button>
          <Button 
            type="submit" 
            className="bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
            onClick={() => setStep(5)}
          >
            <ArrowRight />
            Gerar Portifólio
          </Button>
        </div>
      </div>

      <div className="w-full max-w-5xl h-[600px] overflow-y-auto overflow-x-hidden rounded-2xl border border-blue-100 p-4 bg-white shadow-md relative">
        <PortfolioRenderer themeId={theme}/>
      </div>
    </div>
  )
}