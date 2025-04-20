import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

type TemplatgeCardProps = {
  name: string
  description: string
  preview: string
  selected: boolean
  onSelect: () => void
}

export function TempleteCard({
  name, description, preview, selected, onSelect
}:TemplatgeCardProps) {
  return (
    <div
      onClick={onSelect}
      className={cn(
        "relative cursor-pointer rounded-xl border-2 border-blue-50 p-1 overflow-hidden transition-all hover:shadow-md",
        selected? "border-blue-500 " : "border-2"
      )}
    >

      {selected && (
        <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-1">
          <Check className="h-4 w-4"/>
        </div>
      )}

      <div className="h-40 overflow-hidden">
        <img 
          src={preview} 
          alt={`Prévia do layout ${name}`}
          className="w-full h-full object-cover object-top hover:object-bottom transition-all duration-2000 rounded-xl "
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-700">{name}</h3>
        <p className="text-sm text-muted-foreground text-gray-500">{description}</p>
      </div>
    </div>
  )
}