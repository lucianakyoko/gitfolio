import { ThemeConfigData } from "@/contexts/ThemeConfigContext";
import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HighlightProjectsSection } from "./components/HighlightProjectsSection";
import { OtherProjectsSection } from "./components/OtherProjectsSection";
import { TecnologiesSection } from "./components/TecnologiesSection";

type MinimalThemeProps = {
  data: ThemeConfigData;
}

export function MinimalTheme({ data }: MinimalThemeProps) {
  const highlightedProjects = data.projects.filter(project => project.highlighted === true);
  const otherProjects = data.projects.filter(project => project.highlighted === false);

  return(
    <div className="w-full flex flex-col items-center py-10">
      <Header 
        email={data.email}
        github={data.githubUser}
        linkedin={data.linkedinUser}
        tagline={data.tagline}
        userImage={data.avatar_url}
        userName={data.name}
      />

      <div className=" sm:w-full px-8 lg:w-4xl flex flex-col gap-8 mt-7">
        <AboutSection 
          about={data.about}
        />
        <TecnologiesSection
          tecnologies={data.tech}
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

      <Footer />
    </div>
  )
}