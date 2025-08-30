import { AboutSection } from "./components/AboutSection"
import { Footer } from "./components/Footer"
import { GithubStatsSection } from "./components/GithubStatsSection"
import { Header } from "./components/Header"
import { HighlightProjectsSection } from "./components/HighlightProjectsSection"
import { OtherProjectsSection } from "./components/OtherProjectsSection"
import { TecnologiesSection } from "./components/TecnologiesSection"

export function ModernTheme() {
  return (
    <div className="bg-gray-100 pb-10">
      <Header />

      <div className="flex flex-col gap-6 mt-8">
        <AboutSection />
        <TecnologiesSection />
        <GithubStatsSection />
        <HighlightProjectsSection />
        <OtherProjectsSection />
      </div>

      <Footer />
    </div>
  )
}
