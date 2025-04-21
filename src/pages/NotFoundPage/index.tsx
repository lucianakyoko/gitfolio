import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export function NotFoundPage() {
  return(
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 gradient-text">404</h1>
        <p className="text-xl text-gitfolio-slate mb-8">Oops! Page not found</p>
        <Button asChild className="bg-gitfolio-teal hover:bg-gitfolio-accent">
          <a href="/" className="inline-flex items-center gap-2">
            <Home className="w-4 h-4" />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  )
}