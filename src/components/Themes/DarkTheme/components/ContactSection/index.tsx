import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section className="rounded-xl bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2 text-white">Entre em contato</h2>
          <p className="text-gray-300">
            Interessado em trabalhar comigo? Entre em contato!
          </p>
        </div>
        
        <div className="flex gap-4">
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Mail className="h-4 w-4 mr-2" />
            Me envie um email
          </Button>
        </div>
      </div>
    </section>
  )
}