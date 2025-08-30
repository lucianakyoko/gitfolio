import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ExternalLink, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import NextImage from "next/image";

export function HighlightProjectsSection() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card 
          className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
        >
          <div className="relative">
              <div className="aspect-video w-full overflow-hidden">
                <NextImage
                  src="https://images.unsplash.com/photo-1744767968954-f3c06e118437?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt={`cover`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  width={220}
                  height={120}
                />
              </div>
{/* 
              <div className="aspect-video w-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </div> */}
            
            <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
              <Star className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-medium">12</span>
            </div>
          </div>
          
          <CardContent className="p-6 space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Projeto XYZ</h3>
                <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt neque enim ipsum modi numquam est.</p>
            </div>
            
            <div className="flex flex-col gap-4 text-sm text-gray-500">
              <div className="">
                <div className="flex items-center flex-wrap gap-2">
                  <Badge variant="outline">Tecnologia A</Badge>
                  <Badge variant="outline">Tecnologia B</Badge>
                  <Badge variant="outline">Tecnologia C</Badge>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>12-10-2025</span>
              </div>
            </div>
            
            <div className="flex gap-4 pt-2">
              <a 
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 flex items-center gap-2 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                <span>View Code</span>
              </a>
              
              <a 
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 flex items-center gap-2 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>

            </div>
          </CardContent>
        </Card>

        <Card 
          className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
        >
          <div className="relative">
              <div className="aspect-video w-full overflow-hidden">
                <NextImage
                  src="https://images.unsplash.com/photo-1744767968954-f3c06e118437?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt={`cover`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  width={220}
                  height={120}
                />
              </div>
            {/* 
              <div className="aspect-video w-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </div> */}
            
            <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
              <Star className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-medium">12</span>
            </div>
          </div>
          
          <CardContent className="p-6 space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Projeto XYZ</h3>
                <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt neque enim ipsum modi numquam est.</p>
            </div>
            
            <div className="flex flex-col gap-4 text-sm text-gray-500">
              <div className="">
                <div className="flex items-center flex-wrap gap-2">
                  <Badge variant="outline">Tecnologia A</Badge>
                  <Badge variant="outline">Tecnologia B</Badge>
                  <Badge variant="outline">Tecnologia C</Badge>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>12-10-2025</span>
              </div>
            </div>
            
            <div className="flex gap-4 pt-2">
              <a 
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 flex items-center gap-2 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                <span>View Code</span>
              </a>
              
              <a 
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 flex items-center gap-2 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>

            </div>
          </CardContent>
        </Card>

        <Card 
          className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
        >
          <div className="relative">
              <div className="aspect-video w-full overflow-hidden">
                <NextImage
                  src="https://images.unsplash.com/photo-1744767968954-f3c06e118437?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt={`cover`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  width={220}
                  height={120}
                />
              </div>
{/* 
              <div className="aspect-video w-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </div> */}
            
            <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
              <Star className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-medium">12</span>
            </div>
          </div>
          
          <CardContent className="p-6 space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Projeto XYZ</h3>
                <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt neque enim ipsum modi numquam est.</p>
            </div>
            
            <div className="flex flex-col gap-4 text-sm text-gray-500">
              <div className="">
                <div className="flex items-center flex-wrap gap-2">
                  <Badge variant="outline">Tecnologia A</Badge>
                  <Badge variant="outline">Tecnologia B</Badge>
                  <Badge variant="outline">Tecnologia C</Badge>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>12-10-2025</span>
              </div>
            </div>
            
            <div className="flex gap-4 pt-2">
              <a 
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 flex items-center gap-2 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                <span>View Code</span>
              </a>
              
              <a 
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 flex items-center gap-2 transition-colors"
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