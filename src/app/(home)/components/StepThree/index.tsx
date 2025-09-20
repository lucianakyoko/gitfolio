'use client'
import { useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { useUser } from "@/contexts/UserContext"
import { useThemeConfig } from "@/contexts/ThemeConfigContext"
import { useTheme } from "@/contexts/ThemeContext"

type StepThreeProps = {
  setStep: (number: number) => void
}

export function StepThree({ setStep }: StepThreeProps) {
  const { user } = useUser();
  const { data, updateData } = useThemeConfig();
  const { theme } = useTheme();

  useEffect(() => {
    if (user?.login && user.login !== data.githubUser) {
      updateData({ githubUser: user.login });
      updateData({ name: user.name });
      updateData({ avatar_url: user.avatar_url });
      updateData({ followers: user.followers });
      updateData({ following: user.following });
      updateData({ themeId: theme });
    }
  }, [
    user?.login, 
    data.githubUser, 
    updateData, 
    user?.avatar_url, 
    user?.name, 
    user?.followers, 
    user?.following, 
    theme
  ]);

  const maxLength = 500
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    if (value.length <= maxLength) {
      updateData({
        about: value,
      })
    }
  }

  const handleSave = () => {
    setStep(4);
  }

  return(
    <div className="py-12 flex flex-col gap-7 items-center">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-3xl font-bold text-gray-600">Personalize seu Portfólio</h2>
        <p className="text-xl text-gray-600">Configure as informações e preferências do seu portfólio</p>
      </div>

      <form 
        action=""
        className="w-full md:w-3xl grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="flex flex-col gap-2">
          <Label className="text-gray-600">Nome</Label>
          <Input 
            id="name" 
            autoFocus
            placeholder="Digite seu nome" 
            className="border-blue-100"
            value={data.name}
            onChange={e => updateData({name: e.target.value})}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="text-gray-600">Avatar</Label>
          <Input 
            id="avatar" 
            placeholder="Adicione o link do seu avatar" 
            className="border-blue-100"
            value={data.avatar_url}
            onChange={e => updateData({avatar_url: e.target.value})}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="text-gray-600">E-mail</Label>
          <Input 
            id="email" 
            placeholder="seu@email.com" 
            className="border-blue-100"
            value={data.email}
            onChange={e => updateData({email: e.target.value})}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="text-gray-600">LinkedIn</Label>
          <Input 
            id="linkedin-user"
            placeholder="https://www.linkedin.com/in/meu-linkedin" 
            className="border-blue-100"
            value={data.linkedinUser}
            onChange={e => updateData({linkedinUser: e.target.value})}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="text-gray-600">GitHub</Label>
          <Input 
            id="github-user" 
            className="border-blue-100 disabled:cursor-not-allowed"
            value={data.githubUser}
            disabled
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="text-gray-600">Tagline</Label>
          <Input 
            id="tagline" 
            placeholder="Front-end Developer" 
            className="border-blue-100"
            value={data.tagline}
            onChange={e => updateData({tagline: e.target.value})}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="text-gray-600" htmlFor="website">Personal Website</Label>
          <Input 
            id="website" 
            placeholder="https://lucianakyoko.vercel.app"  
            className="border-blue-100"
            value={data.website}
            onChange={e => updateData({website: e.target.value})}
          />
        </div>

        <div className="md:col-span-2 flex flex-col gap-2">
          <Label className="text-gray-600" htmlFor="about">Sobre</Label>
          <Textarea
            id="about"
            placeholder="Fale um pouco sobre você e seu trabalho"
            className="min-h-[100px] border-blue-100"
            value={data.about}
            onChange={handleChange}
          />
          <p className="text-xs text-gray-600">{data.about.length} de {maxLength}</p>
        </div>

        <Separator className="md:col-span-2 my-6"/>

        <div className="flex gap-2 items-center">
          <Switch 
            id="show-followers"
            className="cursor-pointer"
            checked={data.showFollowers}
            onCheckedChange={() => updateData({ showFollowers: !data.showFollowers})}
          />
          <Label 
            className="text-gray-600" 
            htmlFor="show-followers"
          >Mostrar número de seguidores</Label>
        </div>

        <div className="flex gap-2 items-center">
          <Switch 
            id="show-stars" 
            className="cursor-pointer"
            checked={data.showStars}
            onCheckedChange={() => updateData({showStars: !data.showStars})}
          />
          <Label 
            className="text-gray-600" 
            htmlFor="show-stars"
          >Mostrar stars</Label>
        </div>

        <Separator className="md:col-span-2 my-6"/>

        <div className="flex flex-col gap-2">
          <Label className="text-gray-600" htmlFor="tech">Tecnogias</Label>
          <Input
            id="tech"
            placeholder="React, TypeScript, Node.js"
            className="border-blue-100"
            value={data.tech.join(', ')}
            onChange={e => updateData({tech: e.target.value.split(', ')})}
          />
          <p className="text-xs text-gray-600">Lista de tecnologias que você utiliza, separadas por vírgula</p>
        </div>
        
        <Separator className="md:col-span-2 my-6"/>
        
        <div className="flex items-center gap-6">
          <Button 
            onClick={() => setStep(2)}
            type="button" 
            variant="ghost"
            className=" border border-blue-500 text-blue-500 hover:bg-blue-100 hover:text-blue-500 cursor-pointer w-fit"
          >
            <ArrowLeft />
            Trocar Tema 
          </Button>

          <Button 
            onClick={ handleSave }
            type="button" 
            className="bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
          >
            Adicionar Projetos
            <ArrowRight />
          </Button>
        </div>
      </form>
    </div>
  )
}