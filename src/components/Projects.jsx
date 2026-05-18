import ProjectCard from "./ProjectCard"

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-950 text-white px-8 py-24"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <ProjectCard
            title="Vulcan Activity Tracker"
            description="A full stack fitness tracking web application with activities, routes, teams, clubs, and leaderboards."
            tech="Python • Flask • SQL Server • Docker • JavaScript"
          />


          <ProjectCard
            title="Compiler Construction Project"
            description="Built a scanner, parser, and code generator in C for a custom programming language."
            tech="C • Parsing • Code Generation • Compiler Design"
          />

        <ProjectCard
            title="CareSync - CardioLink"
            description="Served as Frontend Lead during a software engineering internship, collaborating within an Agile development team to build user-facing features, support backend services, and resolve database integration issues to ensure reliable platform data flow."
            tech="Python • Flask • SQL • Docker • JavaScript • Git • Azure DevOps"
        />

          <ProjectCard
            title="C# OOP Assignment Rewrites"
            description="Rewrote object-oriented programming assignments from C++ into C# to strengthen understanding of the language."
            tech="C# • OOP • File Handling"
          />


        </div>

      </div>
    </section>
  )
}

export default Projects