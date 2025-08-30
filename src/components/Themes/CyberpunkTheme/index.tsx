import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProjectsSection } from "./components/ProjectsSection";
import { TecnologiesSection } from "./components/TecnologiesSection";

export function CyberpunkTheme() {
  return (
    <div className="min-h-screen bg-black text-cyan-400 font-mono py-10">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxYTFhM2EiIHN0cm9rZS13aWR0aD0iMSIvPgogIDwvcGF0dGVybj4KPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')]"></div>

      <Header />
      <main className="container mx-auto px-4 py-12 relative z-10">
        <AboutSection />
        <TecnologiesSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  )
}