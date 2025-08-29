'use client'

import NextLink from 'next/link';
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from '@radix-ui/react-avatar';
import { useUser } from '@/contexts/UserContext';

export function Header() {
  const { user } = useUser();

  return (
    <header className='py-3 px-6 flex justify-between border-b border-b-blue-200'>
      <div className='flex items-center gap-6'>
        <NextLink 
          href='/'
          className='text-blue-950 font-bold text-xl hover:text-blue-800'
        >Gitfolio
        </NextLink>
        <NextLink 
          href='/docs'
          className='text-blue-950 font-bold text-xl hover:text-blue-800'
        >Docs
        </NextLink>
      </div>

      <div className='flex items-center gap-2'>
        <Avatar>
          <AvatarImage 
            src={user?.avatar_url}
            alt={`Foto de ${user?.name} no Github`}
          />
        </Avatar>
        <span className='text-blue-950 font-bold text-sm'>{user?.name}</span>
      </div>
    </header>
  )
}