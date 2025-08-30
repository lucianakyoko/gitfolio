import { Badge } from "@/components/ui/badge";

export function TecnologiesSection() {
  return(
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-purple-300">Technologies</h2>
      <div className="flex flex-wrap gap-2">
        <Badge className="bg-purple-900/50 hover:bg-purple-800 text-white px-3 py-1">
          React.js
        </Badge>
        <Badge className="bg-purple-900/50 hover:bg-purple-800 text-white px-3 py-1">
          Node.js
        </Badge>
        <Badge className="bg-purple-900/50 hover:bg-purple-800 text-white px-3 py-1">
          Typescrip
        </Badge>
        <Badge className="bg-purple-900/50 hover:bg-purple-800 text-white px-3 py-1">
          TailwindCSS
        </Badge>
      </div>
    </section>
  )
}