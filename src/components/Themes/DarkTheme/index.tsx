import { ThemeConfigData } from "@/contexts/ThemeConfigContext";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProjectsSection } from "./components/ProjectsSection";
import { TecnologiesSection } from "./components/TecnologiesSection";

type DarkThemeProps={
  data: ThemeConfigData
}

export function DarkTheme({ data }: DarkThemeProps) {
  return (
    <div className="min-h-screen bg-black text-white pb-10">
      <Header
        email={data.email}
        github={data.githubUser} 
        linkedin={data.linkedinUser}
        tagline={data.tagline}
        userImage={data.avatar_url}
        userName={data.name}
      />

      <div className="container mx-auto px-4 py-12">
        <AboutSection
          about={data.about}
        />
        <TecnologiesSection
          tecnologies={data.tech}
        />
        <ProjectsSection
          github={data.githubUser}
          showStars={data.showStars}
          projetos={data.projects}
        />
        <ContactSection
          email={data.email}
        />
      </div>
      <Footer 
        userName={data.name}
      />
    </div>
  )
}