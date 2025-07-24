type HeaderProps = {
  number: number;
  title: string;
}

export function Header({number, title}: HeaderProps) {
  return(
    <div className="flex items-center gap-2">
      <span className="text-white bg-cyan-500 font-bold flex items-center justify-center rounded-full w-8 h-8">
        {number}
      </span>
      <h3 className="text-gray-600 font-bold">{title}</h3>
    </div>
  )
}
