import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { SquareArrowOutUpRight, Star } from "lucide-react";

export function OtherProjectsSection() {
  return(
    <section className="flex flex-col gap-2 px-6 md:px-40">
      <h3 className="font-semibold text-gray-600 text-xl pb-1 border-b-2 border-b-cyan-600 w-fit">Outros Projetos</h3>

      <div className="w-full flex flex-wrap gap-4 mt-3">
        <Card className="border-blue-100 hover:border-cyan-500 w-full">
          <CardHeader>
            <div className="flex justify-between">
              <p className="font-bold text-cyan-700">Nome do Projeto</p>
              <div className="flex items-center gap-1 bg-amber-100 py-0.5 px-2 rounded-2xl">
                <Star size={12} color="#dea918"/>
                <span className="text-yellow-600">2</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex gap-1">
            <img 
              src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1605&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="imagem do projeto XYZ"
              className="rounded-lg w-[120px]"
            />

            <div className="flex flex-col gap-1">
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sunt perspiciatis magnam deleniti incidunt. Delectus.</p>
              <ul className="flex gap-1 flex-wrap">
                <li className="border border-blue-100 rounded-xl text-[10px] py-1 px-1.5 text-gray-500">
                  React
                </li>
                <li className="border border-blue-100 rounded-xl text-[10px] py-1 px-1.5 text-gray-500">
                  Typescript
                </li>
                <li className="border border-blue-100 rounded-xl text-[10px] py-1 px-1.5 text-gray-500">
                  Node.js
                </li>
              </ul>
            </div>
            
          </CardContent>

          <CardFooter className="flex items-center gap-4
          ">
            <div className="flex items-center gap-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              <a 
                href="http://" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-cyan-500"
              >código fonte</a>
            </div>
            <div className="flex items-center gap-0.5">
              <SquareArrowOutUpRight size={16} color="#9E9E9E"/>
              <a 
                href="http://" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-gray-500 hover:text-cyan-500"
              >preview</a>
            </div>
          </CardFooter>
        </Card>
        <Card className="border-blue-100 hover:border-cyan-500 w-full">
          <CardHeader>
            <div className="flex justify-between">
              <p className="font-bold text-cyan-700">Nome do Projeto</p>
              <div className="flex items-center gap-1 bg-amber-100 py-0.5 px-2 rounded-2xl">
                <Star size={12} color="#dea918"/>
                <span className="text-yellow-600">2</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex gap-1">
            <img 
              src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1605&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="imagem do projeto XYZ"
              className="rounded-lg w-[120px]"
            />

            <div className="flex flex-col gap-1">
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sunt perspiciatis magnam deleniti incidunt. Delectus.</p>
              <ul className="flex gap-1 flex-wrap">
                <li className="border border-blue-100 rounded-xl text-[10px] py-1 px-1.5 text-gray-500">
                  React
                </li>
                <li className="border border-blue-100 rounded-xl text-[10px] py-1 px-1.5 text-gray-500">
                  Typescript
                </li>
                <li className="border border-blue-100 rounded-xl text-[10px] py-1 px-1.5 text-gray-500">
                  Node.js
                </li>
              </ul>
            </div>
            
          </CardContent>

          <CardFooter className="flex items-center gap-4
          ">
            <div className="flex items-center gap-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              <a 
                href="http://" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-cyan-500"
              >código fonte</a>
            </div>
            <div className="flex items-center gap-0.5">
              <SquareArrowOutUpRight size={16} color="#9E9E9E"/>
              <a 
                href="http://" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-gray-500 hover:text-cyan-500"
              >preview</a>
            </div>
          </CardFooter>
        </Card>
        <Card className="border-blue-100 hover:border-cyan-500 w-full">
          <CardHeader>
            <div className="flex justify-between">
              <p className="font-bold text-cyan-700">Nome do Projeto</p>
              <div className="flex items-center gap-1 bg-amber-100 py-0.5 px-2 rounded-2xl">
                <Star size={12} color="#dea918"/>
                <span className="text-yellow-600">2</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex gap-1">
            <img 
              src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1605&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="imagem do projeto XYZ"
              className="rounded-lg w-[120px]"
            />

            <div className="flex flex-col gap-1">
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sunt perspiciatis magnam deleniti incidunt. Delectus.</p>
              <ul className="flex gap-1 flex-wrap">
                <li className="border border-blue-100 rounded-xl text-[10px] py-1 px-1.5 text-gray-500">
                  React
                </li>
                <li className="border border-blue-100 rounded-xl text-[10px] py-1 px-1.5 text-gray-500">
                  Typescript
                </li>
                <li className="border border-blue-100 rounded-xl text-[10px] py-1 px-1.5 text-gray-500">
                  Node.js
                </li>
              </ul>
            </div>
            
          </CardContent>

          <CardFooter className="flex items-center gap-4
          ">
            <div className="flex items-center gap-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              <a 
                href="http://" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-cyan-500"
              >código fonte</a>
            </div>
            <div className="flex items-center gap-0.5">
              <SquareArrowOutUpRight size={16} color="#9E9E9E"/>
              <a 
                href="http://" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-gray-500 hover:text-cyan-500"
              >preview</a>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}