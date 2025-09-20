import { NextResponse, NextRequest } from 'next/server';

interface RouteParams {
  params: Promise<{ user: string }>;
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  const { user } = await params;
  
  const url = `https://raw.githubusercontent.com/${user}/${user}/main/README.md`;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `README.md não encontrado para ${user}` },
        { status: 404 }
      );
    }

    const readmeText = await res.text();
    return NextResponse.json({ readme: readmeText });
  } catch (error) {
    console.error('Erro ao buscar README:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar README no GitHub' },
      { status: 500 }
    );
  }
}