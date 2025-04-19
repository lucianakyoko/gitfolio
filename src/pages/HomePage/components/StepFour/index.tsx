import { ArrowRight, Download, SquarePen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StepFour() {
  return (
    <div className="py-12 flex flex-col gap-7 items-center">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-3xl font-bold text-gray-600">Preview</h2>
        <div className="flex items-center gap-4">
          <Button type="button" className="bg-white text-gray-600 border border-blue-100 hover:bg-blue-100 cursor-pointer">
            <SquarePen />
            Editar
          </Button>

          <Button type="button" className="bg-white text-gray-600 border border-blue-100  hover:bg-blue-100 cursor-pointer">
            <Download />
            Baixar Configurações
          </Button>
          <Button type="submit" className="bg-blue-500 text-white hover:bg-blue-600 cursor-pointer">
            <ArrowRight />
            Gerar Portifólio
          </Button>
        </div>
      </div>

      <div className="w-5xl rounded-2xl border border-blue-100 p-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sunt, quaerat at nesciunt consequuntur labore fuga odio quisquam, officia repudiandae maiores ducimus tempore nam temporibus? Deserunt rerum nostrum aperiam tempore dolore. Illo, nobis quos id obcaecati eligendi deserunt ullam exercitationem! Consequatur nam reiciendis ducimus id necessitatibus in, dignissimos possimus fugiat dolor, laudantium magnam iure, itaque culpa. Odit optio corrupti illum qui incidunt voluptatem amet ipsum similique eum nobis aut placeat quibusdam, assumenda impedit saepe omnis dignissimos facilis voluptatum. Corrupti error dolorem tenetur velit suscipit vitae, dolor molestias itaque blanditiis doloremque praesentium? Error harum assumenda voluptatem saepe obcaecati suscipit est! Veniam!
      </div>
    </div>
  )
}