import { motion } from "framer-motion"

function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen bg-slate-900 text-white px-8 pt-32 pb-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          About Me
        </h2>

        <p className="text-slate-300 text-lg leading-8 mb-6">
          I am a Computer Science graduate from Pennsylvania Western
          University, graduating Summa Cum Laude with a 3.91 GPA and
          receiving the Arthur and Alillicent Gabriel Merit Award for
          outstanding achievement in computer science and computer
          information systems.
        </p>

        <p className="text-slate-300 text-lg leading-8 mb-6">
          My experience includes full stack software development,
          frontend leadership during internship work, database systems,
          and building applications using technologies such as Python,
          Flask, SQL Server, JavaScript, Docker, React, and Azure DevOps.
        </p>

        <p className="text-slate-300 text-lg leading-8 mb-6">
          Throughout my internships and personal projects, I have enjoyed
          solving technical challenges, collaborating within team
          environments, and building software that combines clean
          engineering with real-world functionality.
        </p>

        <p className="text-slate-300 text-lg leading-8 mb-6">
          Outside of software engineering, I am passionate about fitness
          and endurance athletics. I have completed the Pittsburgh
          Marathon twice, including a sub-4-hour finish, and have been
          involved in soccer throughout my life, including serving as
          Vice President of my university's Club Soccer organization.
        </p>

        <p className="text-slate-300 text-lg leading-8">
          Many of my projects are inspired by the connection between
          technology, performance, and practical impact, including the
          development of the Vulcan Activity Tracker fitness platform.
        </p>

      </div>
    </motion.section>
  )
}

export default About