import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Save } from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { useState } from "react";
import { useGithubUser } from "@/hooks/useGithubUser";

type StepThreePros = {
  onPrevious: () => void
  onNext: () => void
}

export function StepThree({onNext, onPrevious}: StepThreePros) {
  const {user, updateUser, username} = useUser()
   const { data } = useGithubUser(username)

  const [name, setName] = useState(data.name ?? '')
  const [email, setEmail] = useState(data.email ?? '')
  const [tagline, setTagline] = useState(data.bio ?? '')
  const [website, setWebsite] = useState(data.blog ?? '')
  const [about, setAbout] = useState(user?.about ?? '')
  const [tech, setTech] = useState(user?.tech ?? '')
  const [projects, setProjects] = useState(user?.projects ?? '')

  const handleNext = () => {
    updateUser({name, email, tagline, website, about, tech, projects})
    onNext()
  }

  return (
    <div className="py-12 flex flex-col gap-7 items-center">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-3xl font-bold text-gray-600">Personalize seu Portfólio</h2>
        <p className="text-xl text-gray-600">Configure as informações e preferências do seu portfólio</p>
      </div>

      <form 
        action=""
        className="w-3xl grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="flex flex-col gap-2">
          <Label className="text-gray-600">Nome</Label>
          <Input 
            id="name" 
            placeholder="Digite seu nome" 
            className="border-blue-100"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="text-gray-600">E-mail</Label>
          <Input 
            id="email" 
            placeholder="seu@email.com" 
            className="border-blue-100"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="text-gray-600">Tagline</Label>
          <Input 
            id="tagline" 
            placeholder="Front-end Developer" 
            className="border-blue-100"
            value={tagline}
            onChange={e => setTagline(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="text-gray-600" htmlFor="website">Personal Website</Label>
          <Input 
            id="website" 
            placeholder="https://lucianakyoko.vercel.app"  
            className="border-blue-100"
            value={website}
            onChange={e => setWebsite(e.target.value)}
          />
        </div>

        <div className="md:col-span-2 flex flex-col gap-2">
          <Label className="text-gray-600" htmlFor="about">About</Label>
          <Textarea
            id="about"
            placeholder="Fale um pouco sobre você e seu trabalho"
            className="min-h-[100px] border-blue-100"
            value={about}
            onChange={e => setAbout(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="text-gray-600" htmlFor="tech">Technologies</Label>
          <Input
            id="tech"
            placeholder="React, TypeScript, Node.js"
            className="border-blue-100"
            value={tech}
            onChange={e => setTech(e.target.value)}
          />
          <p className="text-sm text-muted-foreground mt-1 text-gray-600">Lista de tecnologias que você utiliza, separadas por vírgula</p>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="text-gray-600" htmlFor="projects">Featured Projects</Label>
          <Input
            id="projects"
            placeholder="project-one, project-two"
            className="border-blue-100"
            value={projects}
            onChange={e => setProjects(e.target.value)}
          />
          <p className="text-sm text-muted-foreground mt-1 text-gray-600">Lista de nomes de repositórios em destaque, separados por vírgula</p>
        </div>

        <div className="flex items-center gap-6">
          <Button 
            onClick={onPrevious}
            type="button" 
            className=" border border-blue-500 text-blue-500 hover:bg-blue-100 cursor-pointer w-fit"
          >
            <ArrowLeft />
            Trocar Tema 
          </Button>

          <Button 
            onClick={handleNext}
            type="button" 
            className="bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
          >
            Salvar Configurações
            <Save />
          </Button>
        </div>
      </form>
    </div>
  )
}