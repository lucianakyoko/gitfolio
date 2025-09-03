import { ExternalLink, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
};

type ProjectsSectionProps = {
  projetos: Project[];
  showStars: boolean;
  github: string;
};

export function ProjectsSection({ projetos, showStars, github }: ProjectsSectionProps) {
  return(
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-purple-300"> Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projetos.map(projeto => (
          <Card
            key={projeto.id}
            className="bg-zinc-900 border border-zinc-800 hover:border-purple-700 transition-all duration-300"
          >
            <CardContent className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg text-white">{ projeto.repoName }</h3>
                {showStars && (
                  <div className="flex items-center">
                    <Star className="h-3.5 w-3.5 text-yellow-500 mr-1" />
                    <span className="text-xs text-gray-400">12</span>
                  </div>
                )}
              </div>
              
              <p className="text-sm text-gray-400 mb-4 flex-grow">
                {projeto.description}
              </p>

              <div className="flex justify-between items-end mt-auto pt-4">
                {projeto.techs?.map(tech => (
                  <span 
                    key={tech}
                    className="text-xs flex items-center gap-1.5 text-gray-400"
                  >
                    <span className="w-2 h-2 bg-purple-400 rounded-full" />
                    { tech }
                  </span>
                ))}

                <a 
                  href={projeto.deploy} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>

                <a 
                  href={`https://github.com/${github}/${projeto.repoName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 flex items-center gap-2 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}