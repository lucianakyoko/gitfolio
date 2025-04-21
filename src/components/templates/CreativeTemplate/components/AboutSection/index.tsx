import { Palette } from "lucide-react";

export function AboutSection() {
  return (
    <section>
      <div className="flex items-center gap-3 justify-center mb-10">
        <Palette className="text-purple-600 w-6 h-6" />
        <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-8 relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsam earum incidunt rem culpa necessitatibus dolores harum aperiam facilis similique.
          </p>
        </div>
      </div>
    </section>
  )
}