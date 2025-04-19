import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TempleteCard } from "./TemplateCard";

import templates from '@/datas/templates.json';
import { useState } from "react";

export function StepTwo() {
  const [selectedId, setSelectedId] = useState<string>('minimal')
  const selectedTemplate = templates.find(template => template.id === selectedId)
  
  return (
    <div className="py-12 flex flex-col gap-7 items-center">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-3xl font-bold text-gray-600">Choose a Portfolio Template</h2>
        <p className="text-xl text-gray-600">Select a template that best showcases your work and style</p>
      </div>
      <div defaultValue="minimal" className="grid grid-cols-3 gap-4 w-4xl m-auto mt-12">
        {
          templates.map(template => (
            <TempleteCard
              key={template.id}
              name={template.name}
              description={template.description}
              preview={template.preview}
              selected={selectedId === template.id}
              onSelect={() => setSelectedId(template.id)}
            />
          ))
        }

      </div>
      <Button type="submit" className="bg-blue-500 text-white hover:bg-blue-600 cursor-pointer">
        Continue com {selectedTemplate?.name}
        <ArrowRight />
      </Button>
    </div>
  )
}