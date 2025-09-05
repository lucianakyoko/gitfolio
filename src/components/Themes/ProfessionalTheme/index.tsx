import { ThemeConfigData } from "@/contexts/ThemeConfigContext";
import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";
import { GithubStatsSection } from "./components/GithubStatsSection";
import { Header } from "./components/Header";
import { HighlightProjectsSection } from "./components/HighlightProjectsSection";
import { TecnologiesSection } from "./components/TecnologiesSection";

type ProfessionalThemeProps={
  data: ThemeConfigData
}

export function ProfessionalTheme({ data }: ProfessionalThemeProps) {
  const highlightedProjects = data.projects.filter(project => project.highlighted === true);
  const otherProjects = data.projects.filter(project => project.highlighted === false);

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-gray-50 to-white pb-10">
      <Header 
        email={data.email}
        github={data.githubUser} 
        linkedin={data.linkedinUser}
        tagline={data.tagline}
        userImage={data.avatar_url}
        userName={data.name}
      />

      <div className="container max-w-5xl mx-auto px-4 py-16 space-y-16">
        <AboutSection 
          about={data.about}
        />
        <GithubStatsSection
          showStars={data.showStars}
          showFollowers={data.showFollowers}
          stars={0} 
          followers={0}
          following={0}
        />
        <TecnologiesSection
          tecnologies={data.tech}
        />
        <HighlightProjectsSection
          projects={highlightedProjects}
          showStars={data.showStars}
          github={data.githubUser}
        />
      </div>
      
      <Footer
        userName={data.name}
      />
    </div>
  )
}