import { Mail } from "lucide-react";

export function Header() {
  return(
    <header className="bg-sky-100 w-full flex flex-col px-6 md:px-40 py-6">
      <div className=" flex gap-4 items-center">
        <img 
          src="https://github.com/lucianakyoko.png" 
          alt="Foto de Perfil de Luciana Kyoko" 
          className="w-30 h-30 rounded-full border-4 border-white"
        />
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl text-cyan-600">Luciana Kyoko</h1>
          <h2 className="text-gray-600">Fron-end Developer</h2>

          <div className="flex items-center gap-4">
            <a 
              className="flex items-center gap-1 text-gray-500 text-sm bg-white px-2 py-1 rounded-md hover:bg-blue-50"
              href="http://" 
              target="_blank" 
              rel="noopener noreferrer"
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke=" #9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              <span>GitHub</span>
            </a>

            <a 
              className="flex items-center gap-1 text-gray-500 text-sm  bg-white px-2 py-1 rounded-md hover:bg-blue-50"
              href="http://" 
              target="_blank" 
              rel="noopener noreferrer"
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke=" #9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              <span>Linkedin</span>
            </a>

            <a 
              className="flex items-center gap-1 text-gray-500 text-sm  bg-white px-2 py-1 rounded-md hover:bg-blue-50"
              href="http://" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Mail color=" #9E9E9E" size={16}/>
              <span>e-mail</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}