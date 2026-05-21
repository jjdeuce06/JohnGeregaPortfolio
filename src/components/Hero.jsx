function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        min-h-screen
        flex
        items-center
        justify-center
        bg-slate-950
        text-white
        px-6
        py-32
      "
    >

      {/* Background Glow Effects */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full top-10 left-10"></div>

      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_50%)]"></div>


      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side */}
          <div>

            <p className="text-slate-400 mb-6 uppercase tracking-[0.35em]">
              Software Engineer
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8">
              John
              <span className="block text-white/90">
                Gerega
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-slate-300 mb-8 leading-relaxed">
              Full Stack Developer • Marathon Runner • Problem Solver
            </h2>

            <p className="max-w-2xl text-slate-400 text-lg leading-9 mb-12">
              Computer Science graduate passionate about building scalable
              software, solving technical challenges, and developing projects
              that combine real-world impact with clean engineering and modern
              design.
            </p>


            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mb-16">

              <a
                href="https://github.com/jjdeuce06"
                target="_blank"
                rel="noreferrer"
                className="
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
                  shadow-lg
                "
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/john-gerega-a2464521a/"
                target="_blank"
                rel="noreferrer"
                className="
                  border
                  border-slate-600
                  px-8
                  py-4
                  rounded-2xl
                  font-semibold
                  hover:scale-105
                  hover:bg-white
                  hover:text-black
                  transition
                  duration-300
                "
              >
                LinkedIn
              </a>

              <a
                href="/John_Gerega_Complete_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="
                  border
                  border-slate-600
                  px-8
                  py-4
                  rounded-2xl
                  font-semibold
                  hover:scale-105
                  hover:bg-slate-800
                  transition
                  duration-300
                "
              >
                Resume
              </a>

            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

                <p className="text-4xl font-black mb-2">
                  3.91
                </p>

                <p className="text-slate-400">
                  GPA
                </p>

              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

                <p className="text-4xl font-black mb-2">
                  2x
                </p>

                <p className="text-slate-400">
                  Marathon Finisher
                </p>

              </div>

              

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

                <p className="text-4xl font-black mb-2">
                  2026
                </p>

                <p className="text-slate-400">
                  CS Graduate
                </p>

              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <div
              className="
                relative
                bg-slate-900/70
                backdrop-blur-sm
                border
                border-slate-800
                rounded-[2rem]
                p-10
                w-full
                max-w-lg
                shadow-2xl
              "
            >

              {/* Top Badge */}
              <div className="flex items-center gap-3 mb-8">

                <div className="w-4 h-4 rounded-full bg-green-400"></div>

                <p className="text-slate-400 tracking-wide">
                  Current Personal Project
                </p>

              </div>

              {/* Featured Project */}
              <div className="mb-10">

                <h3 className="text-3xl font-bold mb-4">
                  C# Rewrite Project
                </h3>

                <p className="text-slate-300 leading-8">
                  Ongoing personal project focused on rewriting previous C and
                  C++ coursework into C# to strengthen object-oriented
                  programming skills, deepen .NET experience, and continue
                  learning beyond formal education.
                </p>

              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-3">

                {[
                  "C#",
                  ".NET",
                  "OOP",
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

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero