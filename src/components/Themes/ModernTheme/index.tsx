import { ThemeConfigData } from "@/contexts/ThemeConfigContext"
import { AboutSection } from "./components/AboutSection"
import { Footer } from "./components/Footer"
import { GithubStatsSection } from "./components/GithubStatsSection"
import { Header } from "./components/Header"
import { HighlightProjectsSection } from "./components/HighlightProjectsSection"
import { OtherProjectsSection } from "./components/OtherProjectsSection"
import { TecnologiesSection } from "./components/TecnologiesSection"

type ModernThemeProps = {
  data: ThemeConfigData;
}

export function ModernTheme({ data }: ModernThemeProps) {
  const highlightedProjects = data.projects.filter(project => project.highlighted === true);
  const otherProjects = data.projects.filter(project => project.highlighted === false);

  return (
    <div className="bg-gray-100 pb-10">
      <Header 
        email={data.email}
        github={data.githubUser}
        linkedin={data.linkedinUser}
        tagline={data.tagline}
        userImage={data.avatar_url}
        userName={data.name}
      />

      <div className="flex flex-col gap-6 mt-8">
        <AboutSection
          about={data.about}
        />
        <TecnologiesSection
          tecnologies={data.tech}
        />
        <GithubStatsSection
          showStars={data.showStars}
          showFollowers={data.showFollowers}
          stars={0} 
          followers={0}
          following={0}
        />
        <HighlightProjectsSection
          projects={highlightedProjects}
          github={data.githubUser}
        />
        <OtherProjectsSection 
          projects={otherProjects}
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
