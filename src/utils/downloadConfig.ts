import { UserData } from "../types";

export function downloadMarkdownConfig(user: UserData) {
  const content = 
  `<!--GitFolio:start-->
    {
      "gitfolio": "on",
      "name": "${user.name}",
      "avatar_url": "${user.avatar_url || ""}",
      "template": "${user.templateId || "default"}",
      "tagline": "${user.tagline || ""}",
      "contact": {
        "email": "${user.email || ""}",
        "website": "${user.website || ""}"
      },
      "about": "${user.about || ""}",
      "projects": ${JSON.stringify(user.projects?.split(",").map(p => p.trim()) || [], null, 2)},
      "technologies": ${JSON.stringify(user.tech?.split(",").map(t => t.trim()) || [], null, 2)}
    }
    <!--GitFolio:end--> `

  const blob = new Blob([content], {type: "text/markdown;charset=utf-8"})
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = "config.md"

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}