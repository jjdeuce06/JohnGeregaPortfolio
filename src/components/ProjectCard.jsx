function ProjectCard({ title, description, tech }) {
  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">

      <h3 className="text-2xl font-bold mb-4">
        {title}
      </h3>

      <p className="text-slate-300 mb-4">
        {description}
      </p>

      <p className="text-slate-400">
        {tech}
      </p>

    </div>
  )
}

export default ProjectCard