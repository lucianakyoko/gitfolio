import { removeNewLines } from "@/utils/removeNewLines";

type AboutSectionProps = {
  about: string;
};

export function AboutSection({ about }:AboutSectionProps) {
  return (
    <section className="sm:w-full flex flex-col gap-2 px-6 md:px-40">
      <h3 className="font-semibold text-gray-600 text-xl pb-1 border-b-2 border-b-cyan-600 w-fit">
        Sobre Mim
      </h3>
      <p className="text-gray-500">
        { removeNewLines(about) }
      </p>
    </section>
  )
}
