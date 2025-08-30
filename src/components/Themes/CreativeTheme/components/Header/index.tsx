import NextImage from "next/image";

export function Header() {
  return (
    <header className="py-20 relative overflow-hidden bg-gradient-to-br from-purple-600 to-pink-500">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -bottom-48 -right-48 animate-pulse"></div>
      </div>
      
      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="group">
            <div className="w-30 h-30 rounded-full overflow-hidden border-4 border-white/50 shadow-xl mb-6 transform hover:scale-105 transition-all duration-300">
              <NextImage 
                src="https://github.com/lucianakyoko.png" 
                alt="Foto da Luciana Kyoko" 
                className="w-full h-full object-cover"
                width={100}
                height={100}
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Luciana Kyoko
          </h1>
          <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
            &quot;Creative Developer & Problem Solver&quot;
          </p>
        </div>
      </div>
    </header>
  )
}