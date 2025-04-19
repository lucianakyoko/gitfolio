import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";

export function StepThree() {
  return (
    <div className="py-12 flex flex-col gap-7 items-center">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-3xl font-bold text-gray-600">Customize your Portfolio</h2>
        <p className="text-xl text-gray-600">Configure your portfolio information and settings</p>
      </div>

      <form 
        action=""
        className="w-3xl grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="flex flex-col gap-2">
          <Label className="text-gray-600">Nome</Label>
          <Input id="name" placeholder="Digite seu nome" className="border-blue-100"/>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="text-gray-600">E-mail</Label>
          <Input id="email" placeholder="seu@email.com" className="border-blue-100"/>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="text-gray-600">Tagline</Label>
          <Input id="tagline" placeholder="Front-end Developer" className="border-blue-100"/>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="text-gray-600" htmlFor="website">Personal Website</Label>
          <Input id="website" placeholder="https://lucianakyoko.vercel.app"  className="border-blue-100"/>
        </div>

        <div className="md:col-span-2 flex flex-col gap-2">
          <Label className="text-gray-600" htmlFor="about">About</Label>
          <Textarea
            id="about"
            placeholder="Tell visitors about yourself and your work"
            className="min-h-[100px] border-blue-100"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="text-gray-600" htmlFor="tech">Technologies</Label>
          <Input
            id="tech"
            placeholder="React, TypeScript, Node.js"
            className="border-blue-100"
          />
          <p className="text-sm text-muted-foreground mt-1 text-gray-600">Comma-separated list of technologies you work with</p>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="text-gray-600" htmlFor="projects">Featured Projects</Label>
          <Input
            id="projects"
            placeholder="project-one, project-two"
            className="border-blue-100"
          />
          <p className="text-sm text-muted-foreground mt-1 text-gray-600">Comma-separated list of repository names to feature</p>
        </div>

        <Button type="submit" className="bg-blue-500 text-white hover:bg-blue-600 cursor-pointer">
          Salvar Configurações
          <Save />
        </Button>
      </form>
    </div>
  )
}