'use client'

import { useParams } from "next/navigation";
import { PortfolioRenderer } from "@/components/PortfolioRenderer";
import useGitFolio from "@/hooks/useGitFolio";
import NextLink from "next/link";
import { Ban, LoaderCircle } from "lucide-react";

export default function UserPage() {
  const params = useParams();
  const user = typeof params.user === 'string' ? params.user : "";

  const { data: portfolio, isLoading, isError } = useGitFolio(user);

  if (!user) return <p>Usuário não especificado.</p>;

  if (isLoading) return (
    <div className="w-full h-dvh bg-blue-50 flex flex-col gap-8 justify-center items-center">
      <LoaderCircle className="animate-spin text-blue-600 w-8 h-8" />
      <p>Carregando Gitfolio de <span className="font-bold">{user}</span>...</p>
    </div>
  );

  if (isError) return (
    <div className="w-full h-dvh bg-blue-50 flex flex-col gap-8 justify-center items-center">
      <Ban className="text-red-600 w-8 h-8" />
      <p>Erro ao carregar Gitfolio de <span className="font-bold">{user}</span></p>
    </div>
  );

  if (!portfolio || portfolio.gitfolio === "off") return (
    <div className="w-full h-dvh bg-blue-50 flex justify-center items-center">
      <div className="flex flex-col gap-4 items-center">
        <p>Gitfolio de <span className="font-bold">{user}</span> não configurado.</p>
        <NextLink 
          href='/'
          className="py-2 px-6 rounded-2xl border-blue-300 bg-blue-300"
        >
          Criar um Gitfolio
        </NextLink>
      </div>
    </div>
  );

  return (
    <PortfolioRenderer themeId={portfolio.themeId} data={portfolio} />
  );
}
