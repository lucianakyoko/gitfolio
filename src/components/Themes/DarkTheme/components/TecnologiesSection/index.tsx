import { Badge } from "@/components/ui/badge";

type TecnologiesSectionProps = {
  tecnologies: string[];
};

export function TecnologiesSection({ tecnologies }: TecnologiesSectionProps) {
  return(
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-purple-300">Technologies</h2>
      <div className="flex flex-wrap gap-2">
        {tecnologies.map(tech => (
          <Badge
            key={tech} 
            className="bg-purple-900/50 hover:bg-purple-800 text-white px-3 py-1"
          >
            { tech }
          </Badge>
        ))}
      </div>
    </section>
  )
}