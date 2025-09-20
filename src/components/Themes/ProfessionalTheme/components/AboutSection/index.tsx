import { removeNewLines } from "@/utils/removeNewLines";

type AboutSectionProps = {
  about: string;
}
export function AboutSection({ about }: AboutSectionProps) {
  return(
    <section>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">About</h2>
      <p className="text-lg text-gray-600 leading-relaxed">
        { removeNewLines(about) }
      </p>
    </section>
  )
}