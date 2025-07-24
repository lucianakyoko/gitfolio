import { CircleCheckBig } from "lucide-react";
import { CreateRepoSection } from "./sections/CreateRepoSection";
import { CopyContentSection } from "./sections/CopyContentSection";
import { CustomizeRepoSection } from "./sections/CustomizeRepoSection";
import { PortfolioUrlDisplaySection } from "./sections/PortfolioUrlDisplaySection";

export function StepFive() {
  return (
    <div className="py-12 flex flex-col gap-12 items-center">
      <div className="flex flex-col gap-2 items-center">
        <span className="bg-emerald-100 rounded-full p-3">
          <CircleCheckBig size={48} color="#34D399"/>
        </span>
        <h2 className="text-3xl font-bold text-gray-600">Seu portfólio está pronto para ser criado!</h2>
        <p className="text-xl text-gray-600">Siga estes passos para publicar seu portfólio GitFolio no GitHub:</p>
      </div>

      <div className="space-y-8 w-3xl flex flex-col gap-9 pb-12">
        <CreateRepoSection />
        <CopyContentSection />
        <CustomizeRepoSection />
        <PortfolioUrlDisplaySection />
      </div>
    </div>
  )
}
