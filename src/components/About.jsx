import { motion } from "framer-motion"

function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen bg-slate-900 text-white px-8 py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">

        <h2 className="text-5xl font-bold mb-8">
          About Me
        </h2>

        <p className="text-slate-300 text-lg leading-8 mb-6">
          I am a Computer Science graduate from Pennsylvania Western
          University with a passion for software development, problem
          solving, and building impactful applications.
        </p>

        <p className="text-slate-300 text-lg leading-8 mb-6">
          My experience includes full stack development, database systems,
          and software engineering projects using technologies such as
          Python, Flask, SQL Server, C#, JavaScript, and Docker.
        </p>

        <p className="text-slate-300 text-lg leading-8">
          Outside of programming, I enjoy marathon running, soccer,
          fitness, and continuously learning new technologies.
        </p>

      </div>
    </motion.section>
  )
}

export default About