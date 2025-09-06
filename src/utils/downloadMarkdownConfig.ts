import { ThemeConfigData } from "@/contexts/ThemeConfigContext"

export function downloadMarkdownConfig(config: ThemeConfigData) {
  const content = 
  `<!--GitFolio:start-->
    {
      "name": ${config.name},
      "email": ${config.email},
      "tagline": ${config.tagline},
      "avatar_url": ${config.avatar_url},
      "website": ${config.website},
      "githubUser": ${config.githubUser},
      "linkedinUser": ${config.linkedinUser},
      "about": ${config.about},
      "tech": ${config.about},
      "showStars": ${config.showStars},
      "showFollowers": ${config.showFollowers},
      "followers": ${config.followers},
      "following": ${config.following},
      "themeId": ${config.themeId},
      "projects": ${config.projects},
    <!--GitFolio:end--> `

  const blob = new Blob([content], {type: "text/markdown;charset=utf-8"})
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = `${config.githubUser}.md`

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}