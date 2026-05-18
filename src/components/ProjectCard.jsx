function ProjectCard({ title, description, tech, github}) {
  return (
    <div
      className="
        bg-slate-800
        p-8
        rounded-2xl
        shadow-lg
        border border-slate-700
        hover:-translate-y-2
        hover:border-slate-500
        transition
        duration-300
      "
    >

      <h3 className="text-3xl font-bold mb-4">
        {title}
      </h3>

      <p className="text-slate-300 leading-7 mb-6">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tech.split(" • ").map((item, index) => (
          <span
            key={index}
            className="
              bg-slate-700
              text-slate-300
              text-sm
              px-3
              py-1
              rounded-full
            "
          >
            {item}
          </span>
        ))}
      </div>

      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-6 text-white font-semibold hover:text-slate-300 transition"
      >
        View on GitHub
      </a>

    </div>
  )
}

export default ProjectCard