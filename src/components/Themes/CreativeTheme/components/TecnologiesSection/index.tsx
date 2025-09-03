import { Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type TecnologiesSectionProps = {
  tecnologies: string[];
}

export function TecnologiesSection({ tecnologies }: TecnologiesSectionProps) {
  return (
    <section>
    <div className="flex items-center gap-3 justify-center mb-10">
      <Code className="text-purple-600 w-6 h-6" />
      <h2 className="text-3xl font-bold text-gray-800">Tecnologias</h2>
    </div>

    <div className="flex flex-wrap gap-3 justify-center">
      { tecnologies.map(technology => (
        <Badge 
          key={technology}
          variant="secondary"
          className="px-4 py-2 bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors"
        >
          {technology}
        </Badge>
      ))}
    </div>
    </section>
  )
}