import { Palette } from "lucide-react";

type AboutSectionProps = {
  about: string;
}
export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section>
      <div className="flex items-center gap-3 justify-center mb-10">
        <Palette className="text-purple-600 w-6 h-6" />
        <h2 className="text-3xl font-bold text-gray-800">Sobre Mim</h2>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-8 relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            { about }
          </p>
        </div>
      </div>
    </section>
  )
}