import { Mail } from "lucide-react";

export function SocialLinksSection() {
  return (
    <section className="flex flex-wrap gap-4 justify-center">
      <a 
        href=""
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8E24AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
        <span className="text-gray-700 font-medium">
          Github
        </span>
      </a>

      <a 
        href=""
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8E24AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        <span className="text-gray-700 font-medium">
          Linkedin
        </span>
      </a>

      <a 
        href=""
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
      >
        <Mail color="#8E24AA" size={20} />
        <span className="text-gray-700 font-medium">
          E-mail
        </span>
      </a>
    </section>
  )
}