import { ExternalLink, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  return(
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-purple-300"> Projectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-zinc-900 border border-zinc-800 hover:border-purple-700 transition-all duration-300">
          <CardContent className="p-6 flex flex-col h-full">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-lg text-white">Projeto XYZ</h3>
              <div className="flex items-center">
                <Star className="h-3.5 w-3.5 text-yellow-500 mr-1" />
                <span className="text-xs text-gray-400">12</span>
              </div>
            </div>
            
            <p className="text-sm text-gray-400 mb-4 flex-grow">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, provident.
            </p>

            <div className="flex justify-between items-end mt-auto pt-4">
              <span className="text-xs flex items-center gap-1.5 text-gray-400">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                TypeScript
              </span>

              <Button 
                size="sm"
                variant="ghost" 
                className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/20 p-2"
                onClick={() => window.open('link', "_blank")}
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border border-zinc-800 hover:border-purple-700 transition-all duration-300">
          <CardContent className="p-6 flex flex-col h-full">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-lg text-white">Projeto XYZ</h3>
              <div className="flex items-center">
                <Star className="h-3.5 w-3.5 text-yellow-500 mr-1" />
                <span className="text-xs text-gray-400">12</span>
              </div>
            </div>
            
            <p className="text-sm text-gray-400 mb-4 flex-grow">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, provident.
            </p>

            <div className="flex justify-between items-end mt-auto pt-4">
              <span className="text-xs flex items-center gap-1.5 text-gray-400">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                TypeScript
              </span>

              <Button 
                size="sm"
                variant="ghost" 
                className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/20 p-2"
                onClick={() => window.open('link', "_blank")}
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border border-zinc-800 hover:border-purple-700 transition-all duration-300">
          <CardContent className="p-6 flex flex-col h-full">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-lg text-white">Projeto XYZ</h3>
              <div className="flex items-center">
                <Star className="h-3.5 w-3.5 text-yellow-500 mr-1" />
                <span className="text-xs text-gray-400">12</span>
              </div>
            </div>
            
            <p className="text-sm text-gray-400 mb-4 flex-grow">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, provident.
            </p>

            <div className="flex justify-between items-end mt-auto pt-4">
              <span className="text-xs flex items-center gap-1.5 text-gray-400">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                TypeScript
              </span>

              <Button 
                size="sm"
                variant="ghost" 
                className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/20 p-2"
                onClick={() => window.open('link', "_blank")}
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border border-zinc-800 hover:border-purple-700 transition-all duration-300">
          <CardContent className="p-6 flex flex-col h-full">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-lg text-white">Projeto XYZ</h3>
              <div className="flex items-center">
                <Star className="h-3.5 w-3.5 text-yellow-500 mr-1" />
                <span className="text-xs text-gray-400">12</span>
              </div>
            </div>
            
            <p className="text-sm text-gray-400 mb-4 flex-grow">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, provident.
            </p>

            <div className="flex justify-between items-end mt-auto pt-4">
              <span className="text-xs flex items-center gap-1.5 text-gray-400">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                TypeScript
              </span>

              <Button 
                size="sm"
                variant="ghost" 
                className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/20 p-2"
                onClick={() => window.open('link', "_blank")}
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border border-zinc-800 hover:border-purple-700 transition-all duration-300">
          <CardContent className="p-6 flex flex-col h-full">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-lg text-white">Projeto XYZ</h3>
              <div className="flex items-center">
                <Star className="h-3.5 w-3.5 text-yellow-500 mr-1" />
                <span className="text-xs text-gray-400">12</span>
              </div>
            </div>
            
            <p className="text-sm text-gray-400 mb-4 flex-grow">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, provident.
            </p>

            <div className="flex justify-between items-end mt-auto pt-4">
              <span className="text-xs flex items-center gap-1.5 text-gray-400">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                TypeScript
              </span>

              <Button 
                size="sm"
                variant="ghost" 
                className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/20 p-2"
                onClick={() => window.open('link', "_blank")}
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border border-zinc-800 hover:border-purple-700 transition-all duration-300">
          <CardContent className="p-6 flex flex-col h-full">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-lg text-white">Projeto XYZ</h3>
              <div className="flex items-center">
                <Star className="h-3.5 w-3.5 text-yellow-500 mr-1" />
                <span className="text-xs text-gray-400">12</span>
              </div>
            </div>
            
            <p className="text-sm text-gray-400 mb-4 flex-grow">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, provident.
            </p>

            <div className="flex justify-between items-end mt-auto pt-4">
              <span className="text-xs flex items-center gap-1.5 text-gray-400">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                TypeScript
              </span>

              <Button 
                size="sm"
                variant="ghost" 
                className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/20 p-2"
                onClick={() => window.open('link', "_blank")}
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}