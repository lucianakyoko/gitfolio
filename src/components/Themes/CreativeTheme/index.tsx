import { ThemeConfigData } from "@/contexts/ThemeConfigContext"
import { AboutSection } from "./components/AboutSection"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { HighlightProjectsSection } from "./components/HighlightProjectsSection"
import { OtherProjectsSection } from "./components/OtherProjectsSection"
import { SocialLinksSection } from "./components/SocialLinksSection"
import { TecnologiesSection } from "./components/TecnologiesSection"

type CreativeThemeProps = {
  data: ThemeConfigData;
}

export function CreativeTheme({ data }: CreativeThemeProps) {
  const highlightedProjects = data.projects.filter(project => project.highlighted === true);
  const otherProjects = data.projects.filter(project => project.highlighted === false);

  return (
    <div className="bg-gray-100 pb-10">
      <Header 
        tagline={data.tagline}
        userImage={data.avatar_url}
        userName={data.name}
      />

      <div className="container max-w-5xl mx-auto px-6 py-16 space-y-20">
        <SocialLinksSection 
          email={data.email}
          github={data.githubUser}
          linkedin={data.linkedinUser}
        />
        <AboutSection 
          about={data.about}
        />
        <TecnologiesSection 
          tecnologies={data.tech}
        />
        <HighlightProjectsSection
          projects={highlightedProjects}
          showStars={data.showStars}
          github={data.githubUser}
        />
        <OtherProjectsSection 
          projects={otherProjects}
          showStars={data.showStars}
          github={data.githubUser}
        />
      </div>
      <Footer />
    </div>
  )
}