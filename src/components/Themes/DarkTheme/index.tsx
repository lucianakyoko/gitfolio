import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProjectsSection } from "./components/ProjectsSection";
import { TecnologiesSection } from "./components/TecnologiesSection";

export function DarkTheme() {
  return (
    <div className="min-h-screen bg-black text-white pb-10">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <AboutSection />
        <TecnologiesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}