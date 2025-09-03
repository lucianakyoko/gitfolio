import { Code } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

type AboutSectionProps = {
  about: string;
}

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section className="mb-16">
      <Collapsible className="bg-black/80 border border-cyan-500/30 rounded-md overflow-hidden">
        <CollapsibleTrigger className="cursor-pointer w-full text-left p-3 flex items-center justify-between hover:bg-cyan-900/20 transition-colors">
          <div className="flex items-center">
            <Code className="h-5 w-5 text-pink-500 mr-2" />
            <span className="text-lg text-cyan-300 font-semibold">sobre.md</span>
          </div>
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-pink-600" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
        </CollapsibleTrigger>
        
        <CollapsibleContent className="p-4 border-t border-cyan-500/30">
          <div className="terminal-text">
            <span className="text-green-500">$</span>
            <span className="text-pink-500"> cat</span>
            <span className="text-white"> about.md</span>
          </div>
          <div className="mt-2 text-cyan-100 leading-relaxed whitespace-pre-wrap font-light">
            { about }
          </div>
        </CollapsibleContent>
      </Collapsible>
    </section>
  )
}