function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-slate-900 text-white px-8 py-24"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-800 p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Languages
            </h3>

            <ul className="space-y-2 text-slate-300">
              <li>Python</li>
              <li>JavaScript</li>
              <li>C#</li>
              <li>C</li>
              <li>SQL</li>
              <li>Java</li>
            </ul>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Frameworks & Tools
            </h3>

            <ul className="space-y-2 text-slate-300">
              <li>Flask</li>
              <li>Docker</li>
              <li>Git</li>
              <li>Azure DevOps</li>
              <li>SQL Server</li>
              <li>Oracle SQL</li>
              <li>React</li>
            </ul>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Concepts
            </h3>

            <ul className="space-y-2 text-slate-300">
              <li>Full Stack Development</li>
              <li>Object-Oriented Programming</li>
              <li>Database Design</li>
              <li>REST APIs</li>
              <li>Software Engineering</li>
              <li>Agile Collaboration</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Skills