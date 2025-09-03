import { ArrowLeft, CircleCheckBig } from "lucide-react";
import { CreateRepoSection } from "./sections/CreateRepoSection";
import { CopyContentSection } from "./sections/CopyContentSection";
import { PortfolioUrlDisplaySection } from "./sections/PortfolioUrlDisplaySection";
import { Button } from "@/components/ui/button";

type StepSixProps = {
  setStep: (number: number) => void
}

export function StepSix({ setStep }: StepSixProps) {
  return (
    <div className="py-12 flex flex-col gap-12 items-center">
      <div className="flex flex-col gap-2 items-center">
        <span className="bg-emerald-100 rounded-full p-3">
          <CircleCheckBig size={48} color="#34D399"/>
        </span>
        <h2 className="text-3xl font-bold text-gray-600">Seu portfólio está pronto para ser criado!</h2>
        <p className="text-xl text-gray-600">Siga estes passos para publicar seu portfólio GitFolio no GitHub:</p>
      </div>

      <div className="space-y-8 w-96 md:w-3xl flex flex-col gap-9 pb-12 items-center md:items-start px-4 md:px-6">
        <CreateRepoSection />
        <CopyContentSection />
        <PortfolioUrlDisplaySection />
      </div>

      <div className="flex items-center gap-6">
          <Button
            onClick={() => setStep(5)}
            type="button"
            variant="ghost"
            className="border border-blue-500 text-blue-500 hover:bg-blue-100 hover:text-blue-500 cursor-pointer w-fit"
          >
            <ArrowLeft />
            Voltar
          </Button>
        </div>
    </div>
  )
}
