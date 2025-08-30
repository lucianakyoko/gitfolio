export function TecnologiesSection() {
  return(
    <section className="sm:w-full lg:w-3xl flex flex-col gap-2">
      <h3 className="font-semibold text-blue-950 text-xl">Tecnologias</h3>
      <ul className="flex gap-4">
        <li className="border border-blue-100 rounded-md text-sm py-1 px-2 text-gray-500">
          React
        </li>
        <li className="border border-blue-100 rounded-md text-sm py-1 px-2 text-gray-500">
          Typescript
        </li>
        <li className="border border-blue-100 rounded-md text-sm py-1 px-2 text-gray-500">
          Node.js
        </li>
      </ul>
    </section>
  )
}
