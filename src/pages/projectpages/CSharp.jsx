import Navbar from "../../components/NavBar"
import Footer from "../../components/Footer"
import { Link } from "react-router-dom"

function CSharp() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      <section className="px-8 pt-40 pb-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-slate-400 uppercase tracking-[0.3em] mb-4">
            Personal Learning Project
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-8">
            C# Assignment Rewrite Project
          </h1>

          <p className="text-slate-300 text-xl leading-9 max-w-4xl mb-10">
            An ongoing personal project focused on rewriting previous C and C++
            coursework into C# in order to strengthen object-oriented
            programming skills, expand familiarity with the .NET ecosystem, and
            continue learning beyond formal education.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "C#",
              ".NET",
              "Object-Oriented Programming",
              "File Handling",
              "Class Design",
              "Inheritance",
              "Polymorphism",
              "Data Structures",
              "Problem Solving",
            ].map((tech, index) => (
              <span
                key={index}
                className="
                  bg-slate-800
                  text-slate-300
                  px-4
                  py-2
                  rounded-full
                  text-sm
                "
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href="https://github.com/jjdeuce06/OOPCSharp"
            target="_blank"
            rel="noreferrer"
            className="
              inline-block
              mt-10
              bg-white
              text-black
              px-8
              py-4
              rounded-2xl
              font-semibold
              hover:scale-105
              hover:bg-slate-300
              transition
              duration-300
            "
          >
            View GitHub Repository
          </a>
        </div>
      </section>

      <section className="px-8 pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Project Overview</h2>

          <p className="text-slate-300 text-lg leading-8 mb-6">
            After graduating from Pennsylvania Western University with a degree
            in Computer Science, I wanted to continue improving my programming
            skills outside of formal coursework.
          </p>

          <p className="text-slate-300 text-lg leading-8">
            Throughout my courses at PennWest, many assignments were completed
            using C and C++. I realized I wanted to build stronger experience
            with C# and the .NET ecosystem, so I began rewriting previous
            coursework projects in C# as a way to continue learning through
            hands-on development.
          </p>
        </div>
      </section>

      <section className="px-8 pb-24 bg-slate-900">
        <div className="max-w-5xl mx-auto py-20">
          <h2 className="text-4xl font-bold mb-12">Project Goals</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Continue Learning Beyond Graduation
              </h3>

              <p className="text-slate-300 leading-7">
                The primary goal of this project is to continue building
                programming knowledge and practical experience even after
                completing formal education.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Strengthen C# Skills
              </h3>

              <p className="text-slate-300 leading-7">
                Rewriting assignments in C# provides deeper exposure to
                object-oriented design, modern syntax, .NET libraries, and
                application structure within the Microsoft ecosystem.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Reinforce Core CS Concepts
              </h3>

              <p className="text-slate-300 leading-7">
                Revisiting previous assignments helps reinforce important
                computer science concepts such as data structures, file
                processing, class design, inheritance, recursion, and algorithm
                implementation.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Build Long-Term Projects
              </h3>

              <p className="text-slate-300 leading-7">
                The project is intended to grow over time, eventually expanding
                into additional coursework rewrites including Data Structures
                and other advanced programming assignments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">
            Object-Oriented Programming Focus
          </h2>

          <p className="text-slate-300 text-lg leading-8 mb-6">
            The project began with assignments from an Object-Oriented
            Programming course, as those projects provided a strong foundation
            for translating procedural and object-oriented concepts into C#.
          </p>

          <p className="text-slate-300 text-lg leading-8 mb-6">
            Assignments included topics such as class structures, constructors,
            encapsulation, inheritance, file handling, validation, and
            structured program organization.
          </p>

          <p className="text-slate-300 text-lg leading-8">
            Rebuilding these assignments in C# also provided experience adapting
            older C and C++ programming approaches into cleaner modern
            object-oriented application design patterns.
          </p>
        </div>
      </section>

      <section className="px-8 pb-24 bg-slate-900">
        <div className="max-w-4xl mx-auto py-20">
          <h2 className="text-4xl font-bold mb-8">Future Expansion</h2>

          <p className="text-slate-300 text-lg leading-8 mb-6">
            This project is ongoing and intended to expand into additional
            coursework beyond Object-Oriented Programming.
          </p>

          <p className="text-slate-300 text-lg leading-8 mb-6">
            Planned future rewrites include assignments involving data
            structures, algorithms, and other computer science topics completed
            throughout my degree program.
          </p>

          <p className="text-slate-300 text-lg leading-8">
            The long-term goal is to continue improving software development
            skills through consistent practice, experimentation, and rebuilding
            previous academic projects using modern tools and languages.
          </p>
        </div>
      </section>

      <section className="px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Lessons Learned</h2>

          <p className="text-slate-300 text-lg leading-8 mb-6">
            This project has reinforced the importance of continuous learning in
            software engineering and has provided valuable experience
            transitioning between programming languages and development styles.
          </p>

          <p className="text-slate-300 text-lg leading-8">
            It has also strengthened problem-solving skills, object-oriented
            design understanding, and familiarity with the C# and .NET
            development environment.
          </p>

          <div className="flex justify-center mt-12">
            <Link
              to="/projects"
              className="
                border
                border-slate-700
                px-6
                py-3
                rounded-2xl
                text-slate-300
                hover:bg-slate-800
                hover:text-white
                transition
              "
            >
              ← Back to Projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CSharp