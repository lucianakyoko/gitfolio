import { AboutSection } from "./components/AboutSection"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { HighlightProjectsSection } from "./components/HighlightProjectsSection"
import { OtherProjectsSection } from "./components/OtherProjectsSection"
import { SocialLinksSection } from "./components/SocialLinksSection"
import { TecnologiesSection } from "./components/TecnologiesSection"

export function CreativeTheme() {
  return (
    <div className="bg-gray-100 pb-10">
      <Header />

      <div className="container max-w-5xl mx-auto px-6 py-16 space-y-20">
        <SocialLinksSection />
        <AboutSection />
        <TecnologiesSection />
        <HighlightProjectsSection />
        <OtherProjectsSection />
      </div>

      <Footer />
    </div>
  )
}