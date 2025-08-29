import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "./Card";
import { useState } from "react";
import themes from "@/data/themes.json";
import { useTheme } from "@/contexts/ThemeContext";

type StepTwoProps = {
  setStep: (number: number) => void
}
export function StepTwo({ setStep }: StepTwoProps) {
  const[ selectedId, setSelectedId ] = useState<string>('minimal');
  const selectedTheme = themes.find(theme => theme.id === selectedId);
  const { setTheme } = useTheme();

  const handleSelectTheme = () => {
    setTheme(selectedId);
    setStep(3);
  }

  return(
    <div className="py-12 flex flex-col gap-7 items-center">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-3xl font-bold text-gray-600">Escolha o tema do Portfólio</h2>
        <p className="text-xl text-gray-600">Selecione um modelo que melhor represente seu estilo e seus projetos</p>
      </div>
      <div 
        defaultValue="minimal" 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mt-12">
        {themes.map(theme => (
          <Card
            key={theme.id}
            name={theme.name}
            description={theme.description}
            preview={theme.preview}
            selected={selectedId === theme.id}
            onSelect={() => setSelectedId(theme.id)}
          />
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Button
          type="button" 
          variant='ghost'
          className="text-blue-500 border hover:text-blue-600 cursor-pointer"
          onClick={() => setStep(1)}
        >
          <ArrowLeft />
          Voltar 
        </Button>
        <Button
          type="button" 
          className="bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
          onClick={handleSelectTheme}
        >
          Continue com {selectedTheme?.type}
          <ArrowRight />
        </Button>
      </div>
    </div>
  )
}