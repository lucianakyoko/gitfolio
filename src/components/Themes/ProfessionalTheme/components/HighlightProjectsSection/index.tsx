import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ExternalLink, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import NextImage from "next/image";
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
type HighlightProjectsSectionProps = {
  projects: Project[];
  showStars: boolean;
  github: string;
}

export function HighlightProjectsSection({ projects, showStars, github }: HighlightProjectsSectionProps) {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Projetos Em Destaque</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map(project => (
          <Card
            key={project.id}
            className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
          >
            <div className="relative">
                <div className="aspect-video w-full overflow-hidden">
                  <NextImage
                    src={project.image || "/generic-project.png"}
                    alt={`cover`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    width={220}
                    height={120}
                  />
                </div>
              
              { showStars && (
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 text-amber-500" />
                  <span className="text-sm font-medium">{ project.stars }</span>
                </div>
              )}
            </div>
            
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{capitalizeName(project.repoName)}</h3>
                  <p className="text-gray-600">
                    { project.description }
                  </p>
              </div>
              
              <div className="flex flex-col gap-4 text-sm text-gray-500">
                <div className="">
                  <div className="flex items-center flex-wrap gap-2">
                    {project.techs?.map(tech => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 pt-2">
                <a 
                  href={`https://github.com/${github}/${project.repoName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 flex items-center gap-2 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  <span>View Code</span>
                </a>
                
                <a 
                  href={project.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 flex items-center gap-2 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>

              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}