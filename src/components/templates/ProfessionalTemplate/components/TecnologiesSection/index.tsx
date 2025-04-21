import { Badge } from "@/components/ui/badge";

export function TecnologiesSection() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Skills & Technologies</h2>
      <div className="flex flex-wrap gap-3">
          <Badge 
            variant="secondary"
            className="px-4 py-2 text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
          >React</Badge>
          <Badge 
            variant="secondary"
            className="px-4 py-2 text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
          >Node.js</Badge>
          <Badge 
            variant="secondary"
            className="px-4 py-2 text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
          >Typescript</Badge>
      </div>
    </section>
  )
}