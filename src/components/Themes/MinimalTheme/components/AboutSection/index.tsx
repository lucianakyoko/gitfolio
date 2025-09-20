type AboutSectionProps = {
  about: string;
}
export function AboutSection({ about }: AboutSectionProps) {
  return(
    <section className=" w-[360px] sm:w-full lg:w-3xl flex flex-col gap-2">
      <h3 className="font-semibold text-blue-950 text-xl">Sobre</h3>
      <p className="text-gray-500">
        { about }
      </p>
    </section>
  )
}