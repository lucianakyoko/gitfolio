import { Avatar, AvatarImage } from "../ui/avatar";


export function Header() {
  return (
    <header className="py-3 px-6 flex justify-between border-b border-b-blue-50">
      <div className="flex items-center gap-6">
        <a className='text-blue-950 font-bold text-xl' href="/">GitFolio</a>
        <a className='text-blue-950 font-bold text-xl' href="/docs">Docs</a>
      </div>

      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage           
            src="https://avatars.githubusercontent.com/u/69259218?v=4" 
            alt="Foto do perfil no Github"
          /> 
        </Avatar>
        <span className="text-blue-950 font-bold text-sm">Luciana Kyoko</span>
      </div>
    </header>
  )
}