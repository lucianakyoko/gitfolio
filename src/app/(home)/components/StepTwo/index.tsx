import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "./Card";

export function StepTwo() {
  return(
    <div className="py-12 flex flex-col gap-7 items-center">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-3xl font-bold text-gray-600">Escolha o tema do Portfólio</h2>
        <p className="text-xl text-gray-600">Selecione um modelo que melhor represente seu estilo e seus projetos</p>
      </div>
      <div defaultValue="minimal" className="grid grid-cols-3 gap-4 w-4xl m-auto mt-12">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Button
        type="button" 
        className="bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
      >
        Continue com Minimal
        <ArrowRight />
      </Button>
    </div>
  )
}