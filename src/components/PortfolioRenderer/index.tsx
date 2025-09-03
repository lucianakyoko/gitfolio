import { MinimalTheme } from '../Themes/MinimalTheme';
import { ModernTheme } from '../Themes/ModernTheme';
import { CreativeTheme } from "../Themes/CreativeTheme";
import { ProfessionalTheme } from "../Themes/ProfessionalTheme";
import { DarkTheme } from "../Themes/DarkTheme";
import { CyberpunkTheme } from "../Themes/CyberpunkTheme";
import { ThemeConfigData } from '@/contexts/ThemeConfigContext';

type PortfolioRendererProps = {
  themeId: string;
  data: ThemeConfigData;
}

type ThemeComponentProps = {
  data: ThemeConfigData;
}

type ThemeComponent = React.FC<ThemeComponentProps>;

export function PortfolioRenderer({ themeId, data }: PortfolioRendererProps) {
  
  const themes: Record<string, ThemeComponent> = {
    minimal: MinimalTheme,
    modern: ModernTheme,
    creative: CreativeTheme,
    professional: ProfessionalTheme,
    dark: DarkTheme,
    cyberpunk: CyberpunkTheme
  }

  const SelectedTheme = themes[themeId] || MinimalTheme;

  return <SelectedTheme data={data} />
}