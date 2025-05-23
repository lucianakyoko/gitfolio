export function GithubStatsSection() {
  return(
    <section className="sm:w-full lg:w-3xl flex flex-col gap-2 px-6 md:px-40">
      <h3 className="font-semibold text-gray-600 text-xl pb-1 border-b-2 border-b-cyan-600 w-fit">Tecnologias</h3>

      <div className="w-full flex items-center gap-4 mt-3">
        <div className="flex flex-col items-center w-1/3 bg-white ronded-lg py-5">
          <span className="font-bold text-2xl text-cyan-500">36</span>
          <span className="text-gray-500 text-sm">Repositórios</span>
        </div>

        <div className="flex flex-col items-center w-1/3 bg-white ronded-lg py-5">
          <span className="font-bold text-2xl text-cyan-500">106</span>
          <span className="text-gray-500 text-sm">Followers</span>
        </div>

        <div className="flex flex-col items-center w-1/3 bg-white ronded-lg py-5">
          <span className="font-bold text-2xl text-cyan-500">16</span>
          <span className="text-gray-500 text-sm">Following</span>
        </div>
      </div>
    </section>
  )
}