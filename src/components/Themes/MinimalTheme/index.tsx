import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HighlightProjectsSection } from "./components/HighlightProjectsSection";
import { OtherProjectsSection } from "./components/OtherProjectsSection";
import { TecnologiesSection } from "./components/TecnologiesSection";

export function MinimalTheme() {
  return(
    <div className="w-full flex flex-col items-center py-10">
      <Header />

      <div className=" sm:w-full px-8 lg:w-4xl flex flex-col gap-8 mt-7">
        <AboutSection />
        <TecnologiesSection />
        <HighlightProjectsSection />
        <OtherProjectsSection />
      </div>

      <Footer />
    </div>
  )
}