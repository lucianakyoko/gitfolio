import { Database } from "lucide-react";

type TecnologiesSectionProps = {
  tecnologies: string[];
}
export function TecnologiesSection({ tecnologies}: TecnologiesSectionProps) {
  return (
    <section className="mb-16">
      <div className="flex items-center mb-4">
        <Database className="text-pink-500 mr-2 h-5 w-5" />
        <h2 className="text-2xl font-bold text-cyan-300">Technologies</h2>
      </div>
      
      <div className="border border-cyan-500/30 rounded-md p-5 bg-gradient-to-br from-black to-slate-900">
        <div className="flex flex-wrap gap-3">
          {tecnologies.map((tech, index) => {
            const colors = [
              "bg-cyan-900/30 text-cyan-400 border-cyan-500",
              "bg-pink-900/30 text-pink-400 border-pink-500",
              "bg-purple-900/30 text-purple-400 border-purple-500",
              "bg-yellow-900/30 text-yellow-400 border-yellow-500",
            ];
            const colorIndex = index % colors.length;
            
            return (
              <span 
                key={tech}
                className={`inline-flex items-center px-3 py-1 rounded-sm ${colors[colorIndex]} border text-sm font-medium shadow-[0_0_5px_rgba(0,255,255,0.3)]`}
              >
                {tech}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  )
}