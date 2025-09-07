import { Mail } from "lucide-react";

type ContactSectionProps = {
  email: string;
}
export function ContactSection({ email }:ContactSectionProps ) {
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
          <a 
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-purple-600 hover:bg-purple-700 p-4 rounded-lg"
          >
            <Mail className="h-4 w-4 mr-2" />
            Me envie um email
          </a>
        </div>
      </div>
    </section>
  )
}