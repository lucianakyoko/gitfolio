import { useUser } from "@/contexts/UserContext";
import { Avatar, AvatarImage } from "../ui/avatar";

export function Header() {
  const { user } = useUser()

  return (
    <header className="py-3 px-6 flex justify-between border-b border-b-blue-50">
      <div className="flex items-center gap-6">
        <a className='text-blue-950 font-bold text-xl' href="/">GitFolio</a>
        <a className='text-blue-950 font-bold text-xl' href="/docs">Docs</a>
      </div>

      {
        user && (
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage           
              src={user.avatar_url}
              alt={`Foto de ${user.name} no Github`}
            /> 
          </Avatar>
          <span className="text-blue-950 font-bold text-sm">{user.name}</span>
        </div>
        )
      }
    </header>
  )
}