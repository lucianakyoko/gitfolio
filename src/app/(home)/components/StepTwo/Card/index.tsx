import { Check } from "lucide-react";
import NextImage from "next/image";

export function Card() {
  return (
    <div className="relative cursor-pointer rounded-xl border-2 border-blue-50 p-1 overflow-hidden transition-all hover:shadow-md">
      <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-1">
        <Check className="h-4 w-4"/>
      </div>

      <div className="h-40 overflow-hidden">
        <NextImage
          className="w-full h-full object-cover object-top hover:object-bottom transition-all duration-2000 rounded-xl "
          src="https://plus.unsplash.com/premium_photo-1744967146102-f6c90fe2a3d2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Logo do Github" 
          width={100} 
          height={100}
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-700">Minimal</h3>
        <p className="text-sm">Design limpo e simples, com foco nos seus projetos</p>
      </div>
    </div>
  )
}