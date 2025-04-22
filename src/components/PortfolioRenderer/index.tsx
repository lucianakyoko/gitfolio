import { useUser } from "@/contexts/UserContext";
import React from "react";
import { MinimalTemplate } from "../templates/MinimalTemplate";
import { ModernTemplate } from "../templates/ModernTemplate";
import { CreativeTemplate } from "../templates/CreativeTemplate";
import { ProfessionalTemplate } from "../templates/ProfessionalTemplate";
import { DarkTemplate } from "../templates/DarkTemplate";
import { CyberpunkTemplate } from "../templates/CyberpunkTemplate";

export function PortfolioRenderer() {
  const { user } = useUser();

  if(!user) return <p>Carregando...</p>

  const templates: Record<string, React.FC<{user: typeof user}>> = {
    minimal: MinimalTemplate,
    modern: ModernTemplate,
    creative: CreativeTemplate,
    professional: ProfessionalTemplate,
    dark: DarkTemplate,
    cyberpunk: CyberpunkTemplate,
  }

  const SelectedTemplate = templates[user.templateId || 'minimal']

  return <SelectedTemplate user={user} />
}
