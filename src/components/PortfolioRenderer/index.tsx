import { MinimalTheme } from '../Themes/MinimalTheme';
import { ModernTheme } from '../Themes/ModernTheme';
import { CreativeTheme } from "../Themes/CreativeTheme";
import { ProfessionalTheme } from "../Themes/ProfessionalTheme";
import { DarkTheme } from "../Themes/DarkTheme";
import { CyberpunkTheme } from "../Themes/CyberpunkTheme";

type PortfolioRendererProps = {
  themeId: string;
}
export function PortfolioRenderer({ themeId }: PortfolioRendererProps) {
  
  const themes: Record<string, React.FC> = {
    minimal: MinimalTheme,
    modern: ModernTheme,
    creative: CreativeTheme,
    professional: ProfessionalTheme,
    dark: DarkTheme,
    cyberpunk: CyberpunkTheme
  }

  const SelectedTheme = themes[themeId] || MinimalTheme;

  return <SelectedTheme />
}