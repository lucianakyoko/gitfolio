type TecnologiesSectionProps = {
  tecnologies: string[];
};

export function TecnologiesSection({ tecnologies }: TecnologiesSectionProps) {
  return(
    <section className="sm:w-full lg:w-3xl flex flex-col gap-2 px-6 md:px-40">
      <h3 className="font-semibold text-gray-600 text-xl pb-1 border-b-2 border-b-cyan-600 w-fit">Tecnologias</h3>
      <ul className="flex flex-wrap gap-4 mt-3">
        {tecnologies.map(tech => (
          <li 
            key={tech}
            className="border border-gray-600 rounded-md text-sm py-1 px-2 text-gray-600"
          >
            { tech }
          </li>
        ))}
      </ul>
    </section>
  )
}
