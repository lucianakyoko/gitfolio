import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";
import { GithubStatsSection } from "./components/GithubStatsSection";
import { Header } from "./components/Header";
import { HighlightProjectsSection } from "./components/HighlightProjectsSection";
import { TecnologiesSection } from "./components/TecnologiesSection";

export function ProfessionalTheme() {
  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-gray-50 to-white pb-10">
      <Header />

      <main className="container max-w-5xl mx-auto px-4 py-16 space-y-16">
        <AboutSection />
        <GithubStatsSection />
        <TecnologiesSection />
        <HighlightProjectsSection />
      </main>
      
      <Footer />
    </div>
  )
}