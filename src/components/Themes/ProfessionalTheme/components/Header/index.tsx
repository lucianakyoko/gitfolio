import { Mail } from "lucide-react";
import NextImage from "next/image";

type HeaderProps = {
  userImage: string;
  userName: string;
  tagline: string;
  github: string;
  email: string;
  linkedin: string;
}

export function Header({ userImage, userName, tagline, github, email, linkedin }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container max-w-5xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="md:w-1/3 flex justify-center md:justify-start">
              <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-white/10 shadow-xl transform hover:scale-105 transition-transform duration-300">
                <NextImage 
                  src={userImage}
                  alt={`Foto de ${userName}`}
                  className="w-full h-full object-cover" 
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">
                { userName }
              </h1>
              <p className="text-xl text-gray-300">
                { tagline }
              </p>
              
              <div className="flex flex-wrap gap-6 mt-6 justify-center md:justify-start">
                  <a 
                    href={`https://github.com/${github}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    <span>GitHub</span>
                  </a>

                  <a 
                    href={`mailto:${email}`}
                    className="text-gray-300 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email</span>
                  </a>

                  <a 
                    href={linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    <span>LinkedIn</span>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </header>
  )
}