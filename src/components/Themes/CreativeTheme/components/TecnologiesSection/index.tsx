import { Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function TecnologiesSection() {
  return (
    <section>
    <div className="flex items-center gap-3 justify-center mb-10">
      <Code className="text-purple-600 w-6 h-6" />
      <h2 className="text-3xl font-bold text-gray-800">Technologies</h2>
    </div>

    <div className="flex flex-wrap gap-3 justify-center">
      <Badge 
        variant="secondary"
        className="px-4 py-2 bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors"
      >
        React
      </Badge>
      <Badge 
        variant="secondary"
        className="px-4 py-2 bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors"
      >
        Node.js
      </Badge>
      <Badge 
        variant="secondary"
        className="px-4 py-2 bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors"
      >
        TypeScript
      </Badge>
      <Badge 
        variant="secondary"
        className="px-4 py-2 bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors"
      >
        TailwindCSS
      </Badge>
    </div>
    </section>
  )
}