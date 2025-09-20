type TecnologiesSectionProps = {
  tecnologies: string[];
};

export function TecnologiesSection({ tecnologies }:TecnologiesSectionProps) {
  return(
    <section className="w-full lg:w-3xl flex flex-col gap-2">
      <h3 className="font-semibold text-blue-950 text-xl">Tecnologias</h3>
      <ul className="flex flex-wrap gap-4">
        {tecnologies.map(tech => (
          <li 
            key={tech}
            className="border border-blue-100 rounded-md text-sm py-1 px-2 text-gray-500"
          >
            { tech }
          </li>
        ))}
      </ul>
    </section>
  )
}
