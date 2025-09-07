import { Mail  } from "lucide-react";
import NextImage from "next/image";

type HeaderProps = {
  tagline: string;
  userName: string;
  userImage: string;
  github: string;
  email: string;
  linkedin: string;
};

export function Header({ tagline, userName, userImage, github, email, linkedin }: HeaderProps) {
  return(
    <div className="bg-gradient-to-r from-purple-900 via-violet-800 to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center md:flex-row md:items-start gap-8">
          <div className="relative">
            <div className="w-36 h-36 rounded-full overflow-hidden ring-4 ring-purple-500 shadow-lg shadow-purple-500/50">
              <NextImage 
                src={userImage}
                alt={`Foto de ${userName}`}
                className="w-full h-full object-cover"
                width={100}
                height={100}
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-black p-2 rounded-full shadow-lg text-purple-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </div>
          </div>
          
          <div className="text-center md:text-left md:ml-4 flex-1">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
              { userName }
            </h1>
        
            <p className="text-xl mt-2 text-gray-300 font-light">
              { tagline }
            </p>
      
            {/* <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
              <div className="flex items-center text-gray-300 text-sm">
                <MapPin className="h-4 w-4 mr-1 text-purple-400" />
                <span>Sorocaba/ SP</span>
              </div>
              
              <div className="flex items-center text-gray-300 text-sm">
                <Star className="h-4 w-4 mr-1 text-purple-400" />
                <span>36 repositórios</span>
              </div>
            </div>
             */}

            <div className="mt-6 flex flex-wrap gap-8 justify-center md:justify-start">
              <a 
                className="border-purple-600 hover:border-purple-500 text-purple-400 hover:bg-purple-900/30 cursor-pointer flex items-center"
                href={`mailto:${email}`} 
                target="_blank" rel="noopener noreferrer"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email
              </a>
              <a
                href={linkedin} 
                target="_blank" rel="noopener noreferrer" 
                className="border-purple-600 hover:border-purple-500 text-purple-400 hover:bg-purple-900/30 cursor-pointer flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                Linkedin
              </a>
              
              <a
                href={`https://github.com/${github}`} 
                target="_blank" rel="noopener noreferrer" 
                className="border-purple-600 hover:border-purple-500 text-purple-400 hover:bg-purple-900/30 cursor-pointer flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                Ver GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}