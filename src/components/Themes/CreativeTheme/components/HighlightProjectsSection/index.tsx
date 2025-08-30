import { ExternalLink, Sparkles, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import NextImage from "next/image";

export function HighlightProjectsSection() {
  return (
    <section>
      <div className="flex items-center gap-3 justify-center mb-10">
        <Sparkles className="text-purple-600 w-6 h-6" />
        <h2 className="text-3xl font-bold text-gray-800">Featured Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="group hover:shadow-lg transition-all duration-300 border-0">
          <div className="h-48 overflow-hidden rounded-t-lg">
            <NextImage 
              src="https://images.unsplash.com/photo-1742836531271-98fd8151d257?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
              width={220}
              height={120}
            />
          </div>

          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-800">Nome do repo</h3>
              <div className="flex items-center gap-1 text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                <Star className="w-4 h-4" />
                <span className="text-sm font-medium">12</span>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4">A beautiful and responsive portfolio website built with React and Tailwind CSS</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline" className="text-gray-600">react</Badge>
              <Badge variant="outline" className="text-gray-600">tailwind</Badge>
              <Badge variant="outline" className="text-gray-600">TypeScript</Badge>
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <a 
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 flex items-center gap-2 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                <span>Source Code</span>
              </a>
              
              <a 
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 flex items-center gap-2 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-all duration-300 border-0">
          <div className="h-48 overflow-hidden rounded-t-lg">
            <NextImage 
              src="https://images.unsplash.com/photo-1742836531271-98fd8151d257?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
              width={220}
              height={120}
            />
          </div>

          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-800">Nome do repo</h3>
              <div className="flex items-center gap-1 text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                <Star className="w-4 h-4" />
                <span className="text-sm font-medium">12</span>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4">A beautiful and responsive portfolio website built with React and Tailwind CSS</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline" className="text-gray-600">react</Badge>
              <Badge variant="outline" className="text-gray-600">tailwind</Badge>
              <Badge variant="outline" className="text-gray-600">TypeScript</Badge>
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <a 
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 flex items-center gap-2 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                <span>Source Code</span>
              </a>
              
              <a 
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 flex items-center gap-2 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-all duration-300 border-0">
          <div className="h-48 overflow-hidden rounded-t-lg">
            <NextImage 
              src="https://images.unsplash.com/photo-1742836531271-98fd8151d257?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
              width={220}
              height={120}
            />
          </div>

          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-800">Nome do repo</h3>
              <div className="flex items-center gap-1 text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                <Star className="w-4 h-4" />
                <span className="text-sm font-medium">12</span>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4">A beautiful and responsive portfolio website built with React and Tailwind CSS</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline" className="text-gray-600">react</Badge>
              <Badge variant="outline" className="text-gray-600">tailwind</Badge>
              <Badge variant="outline" className="text-gray-600">TypeScript</Badge>
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <a 
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 flex items-center gap-2 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                <span>Source Code</span>
              </a>
              
              <a 
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 flex items-center gap-2 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}