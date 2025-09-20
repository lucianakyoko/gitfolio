import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { SquareArrowOutUpRight, Star } from "lucide-react";
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
};

type OtherProjectsSectionProps = {
  projects: Project[];
  showStars: boolean;
  github: string;
};

export function OtherProjectsSection({ projects, showStars, github }: OtherProjectsSectionProps) {
  return(
    <section className="flex flex-col gap-2">
      <h3 className="font-semibold text-blue-950 text-xl">Outros Projetos</h3>

      <div className="w-full flex flex-wrap gap-4">
        {projects.map(project => (
          <Card 
            key={project.id}
            className="border-blue-100 hover:border-blue-500 w-full">
            <CardHeader>
              <div className="flex justify-between">
                <p className="font-bold text-blue-900">{capitalizeName(project.repoName)}</p>
                {showStars && (
                  <div className="flex items-center gap-1">
                    <Star size={12} color="#9E9E9E"/>
                    <span className="text-gray-500">{project.stars}</span>
                  </div>
                )}
              </div>
            </CardHeader>

            <CardContent className="flex gap-3">
              <NextImage 
                src={project.image || "/generic-project.png"}
                alt={`Imagem do projeto ${project.repoName}`}
                className="rounded-lg w-[160px] h-[120px] object-cover"
                width={120}
                height={120}
              />

              <div className="flex flex-col gap-2">
                <p className="text-gray-600 text-sm">
                  {project.description}
                </p>
                <ul className="flex gap-1 flex-wrap">
                  { project.techs?.map(tech => (
                    <li 
                      key={tech}
                      className="border border-blue-100 rounded-xl text-[10px] py-1 px-1.5 text-gray-500"
                    >
                      { tech }
                    </li>
                  ))}
                </ul>
              </div>
              
            </CardContent>

            <CardFooter className="flex items-center gap-4
            ">
              <div className="flex items-center gap-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                <a 
                  href={`https://github.com/${github}/${project.repoName}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-blue-500"
                >código fonte</a>
              </div>
              <div className="flex items-center gap-0.5">
                <SquareArrowOutUpRight size={16} color="#9E9E9E"/>
                <a 
                  href={project.url}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-gray-500 hover:text-blue-500"
                >preview</a>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}