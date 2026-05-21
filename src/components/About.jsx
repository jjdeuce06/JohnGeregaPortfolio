import { motion } from "framer-motion"

function About() {
  return (
    <motion.section
      id="about"
      className="
        min-h-screen
        bg-slate-900
        text-white
        px-8
        py-32
        relative
        overflow-hidden
      "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-20">

          <p className="uppercase tracking-[0.3em] text-slate-400 mb-4">
            About Me
          </p>

          <h2 className="text-5xl md:text-6xl font-black mb-8">
            Software Engineer & Lifelong Learner
          </h2>

          <p className="text-slate-300 text-xl leading-9 max-w-4xl">
            Computer Science graduate passionate about full-stack software
            engineering, problem-solving, continuous learning, and building
            technology with real-world impact.
          </p>

        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Side */}
          <div>

            <div className="space-y-6">

              <p className="text-slate-300 text-lg leading-8">
                I graduated from Pennsylvania Western University with a
                Bachelor’s degree in Computer Science, earning Summa Cum Laude
                honors with a 3.91 GPA and receiving the Arthur and Alillicent
                Gabriel Merit Award for outstanding achievement in computer
                science and computer information systems.
              </p>

              <p className="text-slate-300 text-lg leading-8">
                My experience includes full-stack software development,
                frontend leadership during internship work, database systems,
                and building applications using technologies such as Python,
                Flask, SQL Server, JavaScript, Docker, React, and Azure DevOps.
              </p>

              <p className="text-slate-300 text-lg leading-8">
                Throughout internships and personal projects, I have enjoyed
                solving technical challenges, collaborating within team
                environments, and developing software that combines clean
                engineering with practical functionality.
              </p>

              <p className="text-slate-300 text-lg leading-8">
                Many of my projects are inspired by the connection between
                technology, performance, and practical impact, including the
                development of the Vulcan Activity Tracker fitness platform.
              </p>

            </div>

          </div>

          {/* Right Side Cards */}
          <div className="space-y-8">

            {/* Athletics */}
            <div
              className="
                bg-slate-800/70
                backdrop-blur-sm
                border
                border-slate-700
                rounded-3xl
                p-8
              "
            >

              <div className="text-4xl mb-4">🏃</div>

              <h3 className="text-2xl font-bold mb-4">
                Athletics & Discipline
              </h3>

              <p className="text-slate-300 leading-7">
                Outside of software engineering, I am passionate about fitness
                and endurance athletics. I have completed the Pittsburgh
                Marathon twice, including a sub-4-hour finish, and have been
                involved in soccer throughout my life.
              </p>

            </div>

            {/* Leadership */}
            <div
              className="
                bg-slate-800/70
                backdrop-blur-sm
                border
                border-slate-700
                rounded-3xl
                p-8
              "
            >

              <div className="text-4xl mb-4">⚽</div>

              <h3 className="text-2xl font-bold mb-4">
                Leadership
              </h3>

              <p className="text-slate-300 leading-7">
                Served as Vice President of PennWest California Club Soccer,
                helping organize team activities, communication, and leadership
                responsibilities while balancing academics and software
                development projects.
              </p>

            </div>

            {/* Continuous Learning */}
            <div
              className="
                bg-slate-800/70
                backdrop-blur-sm
                border
                border-slate-700
                rounded-3xl
                p-8
              "
            >

              <div className="text-4xl mb-4">💡</div>

              <h3 className="text-2xl font-bold mb-4">
                Continuous Learning
              </h3>

              <p className="text-slate-300 leading-7">
                I enjoy continuing to learn beyond formal education through
                personal software projects, rewriting coursework in new
                languages, exploring modern frameworks, and building practical
                applications that strengthen both technical and creative skills.
              </p>

            </div>

          </div>

        </div>

      </div>

    </motion.section>
  )
}

export default About