import { ExternalLink, Star, Zap } from "lucide-react"
import { capitalizeName } from "@/utils/capitalizeNames";

type Project = {
  id: number;
  repoName: string; 
  url: string; 
  stars: number; 
  description?: string;
  image?: string; 
  techs?: string[]; 
  deploy?: string;
  highlighted?: boolean;
}

type ProjectsSectionProps = {
  projects: Project[],
  showStars: boolean;
  github: string;
}

export function ProjectsSection({ projects, showStars, github }: ProjectsSectionProps) {
  return(
    <div className="mb-16">
      <div className="flex items-center mb-6">
        <Zap className="text-pink-500 mr-2 h-5 w-5" />
        <h2 className="text-2xl font-bold text-cyan-300">Projects.exe</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className="group relative border border-cyan-500/30 hover:border-cyan-400/80 bg-gradient-to-br from-black to-slate-900/90 rounded-md overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)]">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9InNjYW5saW5lcyIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iNCIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDApIj4KICAgICAgPGxpbmUgeDE9IjAiIHkxPSIxIiB4Mj0iMTAwJSIgeTI9IjEiIHN0cm9rZT0icmdiYSgwLCAyNTUsIDI1NSwgMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3NjYW5saW5lcykiLz4KPC9zdmc+')] opacity-60 mix-blend-overlay"></div> 
            {/* <div className="absolute -top-1 -right-1 w-8 h-8 bg-pink-500/80 transform rotate-12"></div> */}
            <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-cyan-500/80 transform -rotate-12"></div>
            
            <div className="p-5 relative">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center">
                  <span className="text-pink-500 mr-2 font-bold">[{String(index).padStart(2, '0')}]</span>
                  <h3 className="text-xl font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors">
                    { capitalizeName(project.repoName) }
                  </h3>
                </div>
                {showStars && (
                  <div className="flex items-center text-yellow-400 bg-yellow-900/20 px-2 py-0.5 rounded">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="text-xs">{ project.stars }</span>
                  </div>
                )}
              </div>
              
              <div className="mt-2 text-cyan-100/80 text-sm border-l-2 border-pink-500/50 pl-3 mb-4">
                { project.description }
              </div>

                <div className="mt-2 mb-4 flex flex-wrap gap-3">
                  {project.techs?.map(tech => (
                    <span 
                      key={tech}
                      className="inline-flex items-center gap px-2 py-1 rounded bg-cyan-900/40 text-cyan-300 text-xs"
                    >
                      <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2" />
                      { tech }
                    </span>
                  ))}
                </div>
              
              <div className="mt-4 flex justify-between items-center pt-2 border-t border-cyan-500/20">
                <div className="flex gap-3">
                  <a 
                    href={`https://github.com/${github}/${project.repoName}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs bg-slate-800/80 text-cyan-400 hover:text-cyan-300 px-2 py-1 rounded transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    <span>SOURCE</span>
                  </a>

                  <a 
                    href={project.url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs bg-slate-800/80 text-pink-400 hover:text-pink-300 px-2 py-1 rounded transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>DEMO</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}