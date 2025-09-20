'use client'
import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Star } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { useThemeConfig } from "@/contexts/ThemeConfigContext"
import { useUser } from "@/contexts/UserContext"
import { useGithubRepos } from "@/hooks/useGithubUser"
import { toast, Toaster } from "sonner"

type StepFourProps = {
  setStep: (number: number) => void
}

type RepoType = {
  id: number
  name: string
  html_url: string
  stargazers_count: number
  description: string
}

type ProjectType = {
  id: number;
  repoName: string
  url: string
  stars: number
  description?: string
  image?: string
  techs?: string[]
  deploy?: string
  highlighted?: boolean
}

type ProjectField = 'description' | 'deploy' | 'image' | 'repoName' | 'stars' | 'url' | 'techs' | 'highlighted';

export function StepFour({ setStep }: StepFourProps) {
  const { user } = useUser()
  const { data, updateData } = useThemeConfig()
  const { data: repos, isLoading: loadingRepos, isError, error, refetch } = useGithubRepos(data.githubUser)
  const [descriptionLengths, setDescriptionLengths] = useState<Record<string, number>>({})
  const [urlErrors, setUrlErrors] = useState<Record<string, { image?: string; deploy?: string }>>({})
  const [techDrafts, setTechDrafts] = useState<Record<string, string>>({});

  useEffect(() => {
    if (user?.login && user.login !== data.githubUser) {
      console.log('Atualizando githubUser para:', user.login)
      updateData({ githubUser: user.login })
    }
  }, [user?.login, data.githubUser, updateData])

  const toggleProjectSelection = (repo: RepoType, checked: boolean) => {
    let updatedProjects = [...(data.projects || [])]
    if (checked) {
      if (!updatedProjects.some((p: ProjectType) => p.repoName === repo.name)) {
        updatedProjects.push({
          id: repo.id,
          repoName: repo.name || 'Sem nome',
          url: repo.html_url || '',
          stars: repo.stargazers_count || 0,
          description: repo.description || '',
          image: '',
          techs: [],
          deploy: '',
          highlighted: false,
        })
        setDescriptionLengths((prev) => ({
          ...prev,
          [repo.name]: repo.description?.length || 0,
        }))
      }
    } else {
      updatedProjects = updatedProjects.filter((p: ProjectType) => p.repoName !== repo.name)
      setDescriptionLengths((prev) => {
        const newLengths = { ...prev }
        delete newLengths[repo.name]
        return newLengths
      })
      setUrlErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[repo.name]
        return newErrors
      })
    }
    updateData({ projects: updatedProjects })
  }

  const toggleProjectHighlight = (repoName: string, checked: boolean) => {
    const updatedProjects = [...(data.projects || [])];
    const index = updatedProjects.findIndex((p: ProjectType) => p.repoName === repoName);

    if (index !== -1) {
      if (checked) {
        const highlightedCount = updatedProjects.filter((p: ProjectType) => p.highlighted).length;
        if (highlightedCount >= 3) {
          toast.error('Você pode destacar no máximo 3 projetos.');
          return;
        }
      }
      updatedProjects[index] = { ...updatedProjects[index], highlighted: checked };
      updateData({ projects: updatedProjects });
    }
  };

  const updateProjectField = (repoName: string, field: ProjectField, value: string) => {
  const updatedProjects = [...(data.projects || [])];
  const index = updatedProjects.findIndex((p: ProjectType) => p.repoName === repoName);

  if (index !== -1) {
    if (field === 'techs') {
      const techsArray = value
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);

      updatedProjects[index] = {
        ...updatedProjects[index],
        techs: techsArray,
      };

      setTechDrafts((prev) => ({ ...prev, [repoName]: value }));
    } else {
      updatedProjects[index] = { ...updatedProjects[index], [field]: value };
    }

    if (field === 'description') {
      setDescriptionLengths((prev) => ({
        ...prev,
        [repoName]: value.length,
      }));
    }

    updateData({ projects: updatedProjects });
  }
};

  const validateUrl = (value: string, repoName: string, field: 'image' | 'deploy') => {
    if (!value) {
      setUrlErrors((prev) => ({
        ...prev,
        [repoName]: { ...prev[repoName], [field]: undefined },
      }))
      return true
    }
    try {
      new URL(value)
      setUrlErrors((prev) => ({
        ...prev,
        [repoName]: { ...prev[repoName], [field]: undefined },
      }))
      return true
    } catch {
      setUrlErrors((prev) => ({
        ...prev,
        [repoName]: { ...prev[repoName], [field]: 'Por favor, insira uma URL válida.' },
      }))
      return false
    }
  }

  const handleSave = () => {
    let isValid = true
    const updatedProjects = [...(data.projects || [])]
    updatedProjects.forEach((project) => {
      if (project.image && !validateUrl(project.image, project.repoName, 'image')) {
        isValid = false
      }
      if (project.deploy && !validateUrl(project.deploy, project.repoName, 'deploy')) {
        isValid = false
      }
    })
    if (!isValid) {
      toast('Por favor, corrija as URLs inválidas antes de salvar.')
      return
    }
    setStep(5)
  }

  return (
    <div className="py-12 flex flex-col gap-7 items-center">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-3xl font-bold text-gray-600">Selecione seus Projetos</h2>
        <p className="text-xl text-gray-600">Escolha os projetos que deseja exibir no seu portfólio</p>
      </div>

      <form action="" className="w-full max-w-3xl flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <Label className="text-gray-600 font-bold text-lg">Selecione os projetos que deseja exibir</Label>
          <p className="text-sm text-gray-600 mb-2">Você pode destacar até 3 projetos para receberem ênfase especial no seu portfólio.</p>
          {loadingRepos ? (
            <p className="text-gray-600">Carregando repositórios...</p>
          ) : isError ? (
            <div className="text-red-600 flex items-center gap-2">
              <p>Erro ao carregar repositórios: {error?.message || 'Tente novamente.'}</p>
              <Button onClick={() => refetch()} variant="outline" size="sm">
                Tentar novamente
              </Button>
            </div>
          ) : !Array.isArray(repos) || repos.length === 0 ? (
            <p className="text-gray-600">Nenhum repositório público encontrado para {data.githubUser}.</p>
          ) : (
            <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto">
              {repos.map((repo: RepoType) => {
                const project = data.projects?.find((p: ProjectType) => p.repoName === repo.name)
                return (
                  <div key={repo.id} className="border border-gray-200 p-4 rounded-md">
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id={`repo-${repo.name}`}
                        checked={!!project}
                        onCheckedChange={(checked) => toggleProjectSelection(repo, checked as boolean)}
                      />
                      <label htmlFor={`repo-${repo.name}`} className="text-gray-600 cursor-pointer flex items-center justify-between w-full">
                        <span>{repo.name}</span>
                        <span className={`${repo.stargazers_count > 0 ? 'text-yellow-400' : ''} flex items-center gap-1`}>
                          <Star size={16} />
                          {repo.stargazers_count}
                        </span>
                      </label>
                    </div>
                    {project && (
                      <div className="mt-4 ml-6 flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                          <Label className="text-gray-600">URL da imagem</Label>
                          <Input
                            placeholder="https://exemplo.com/imagem.jpg"
                            className="border-blue-100"
                            value={project.image || ''}
                            onChange={(e) => updateProjectField(repo.name, 'image', e.target.value)}
                            onBlur={(e) => validateUrl(e.target.value, repo.name, 'image')}
                          />
                          <p className="text-xs text-gray-600">
                            Insira a URL de uma imagem que será exibida como capa do projeto no seu portfólio.
                            {urlErrors[repo.name]?.image && (
                              <span className="text-red-600 ml-1">{urlErrors[repo.name].image}</span>
                            )}
                          </p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Label className="text-gray-600">Descrição do Projeto</Label>
                          <Input
                            placeholder="Descreva o projeto em até 200 caracteres"
                            className="border-blue-100"
                            value={project.description || ''}
                            onChange={(e) => updateProjectField(repo.name, 'description', e.target.value)}
                            maxLength={200}
                          />
                          <p className="text-xs text-gray-600">
                            Escreva uma breve descrição para o projeto (máximo de 200 caracteres).{' '}
                            <span
                              className={
                                descriptionLengths[repo.name] === 200 ? 'text-red-600' : 'text-gray-600'
                              }
                            >
                              {descriptionLengths[repo.name] || project.description?.length || 0}/200
                            </span>
                          </p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Label className="text-gray-600">Tecnologias usadas no Projeto</Label>
                           <Input
                            id={`tech-${repo.name}`}
                            placeholder="Ex.: React, Node.js, MongoDB"
                            className="border-blue-100"
                            value={techDrafts[repo.name] ?? (project.techs?.join(', ') || '')}
                            onChange={(e) => {
                              const raw = e.target.value;
                              setTechDrafts((prev) => ({ ...prev, [repo.name]: raw }));
                              updateProjectField(repo.name, 'techs', raw);
                            }}
                            onBlur={() => {
                              const normalized = (project.techs?.join(', ') || '');
                              setTechDrafts((prev) => ({ ...prev, [repo.name]: normalized }));
                            }}
                          />
                          <p className="text-xs text-gray-600">Separadas por vírgula</p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Label className="text-gray-600">Link de Deploy</Label>
                          <Input
                            placeholder="https://meu-projeto.vercel.app"
                            className="border-blue-100"
                            value={project.deploy || ''}
                            onChange={(e) => updateProjectField(repo.name, 'deploy', e.target.value)}
                            onBlur={(e) => validateUrl(e.target.value, repo.name, 'deploy')}
                          />
                          <p className="text-xs text-gray-600">
                            Insira a URL onde o projeto está hospedado, se disponível.
                            {urlErrors[repo.name]?.deploy && (
                              <span className="text-red-600 ml-1">{urlErrors[repo.name].deploy}</span>
                            )}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch
                            className="cursor-pointer"
                            id={`highlight-${repo.name}`}
                            checked={project.highlighted || false}
                            onCheckedChange={(checked) => toggleProjectHighlight(repo.name, checked)}
                          />
                          <Label htmlFor={`highlight-${repo.name}`} className="text-gray-600 cursor-pointer">
                            Destacar este projeto
                          </Label>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>

        <Separator className="my-6" />

        <div className="flex items-center gap-6">
          <Button
            onClick={() => setStep(3)}
            type="button"
            variant="ghost"
            className="border border-blue-500 text-blue-500 hover:bg-blue-100 hover:text-blue-500 cursor-pointer w-fit"
          >
            <ArrowLeft />
            Voltar
          </Button>

          <Button
            onClick={handleSave}
            type="button"
            className="bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
          >
            Visualizar Prévia
            <ArrowRight />
          </Button>
        </div>
      </form>
      <Toaster />
    </div>
  )
}