function ProjectCard({
  title,
  description,
  tech,
  github,
  image,
}) {
  return (
    <div
      className="
        bg-slate-800
        p-8
        rounded-2xl
        shadow-lg
        border
        border-slate-700
        hover:-translate-y-2
        hover:border-slate-500
        transition
        duration-300
      "
    >

      {/* Project Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="
            rounded-xl
            mb-6
            w-full
            h-56
            object-cover
          "
        />
      )}

      {/* Title */}
      <h3 className="text-3xl font-bold mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-300 leading-7 mb-6">
        {description}
      </p>

      {/* Tech Stack */}
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

      {/* GitHub Link */}
      {github && (
        <a
          href={github}
          className="
            inline-block
            mt-6
            text-white
            font-semibold
            hover:text-slate-300
            transition
          "
        >
          View Project →
        </a>
      )}

    </div>
  )
}

export default ProjectCard