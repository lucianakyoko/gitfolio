export function AboutSection() {
  return (
    <section className="mb-12 border border-purple-700 rounded-xl p-6 bg-black/80 relative overflow-hidden backdrop-blur-sm">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-700/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-10 w-40 h-40 bg-blue-700/20 rounded-full blur-3xl"></div>
        <h2 className="text-2xl font-bold mb-4 text-purple-300">About Me</h2>
      <p className="text-gray-300 leading-relaxed">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi quis accusamus eius! Nam distinctio hic vitae delectus quisquam? Quae, quo.</p>
    </section>
  )
}