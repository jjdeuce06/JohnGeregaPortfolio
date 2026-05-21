import { GitHubCalendar } from "react-github-calendar"

function GitHubActivity() {
  return (
    <section
      className="
        bg-slate-950
        text-white
        px-6
        md:px-8
        py-24
        relative
        overflow-hidden
      "
    >

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>


      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-16 text-center">

          <p className="uppercase tracking-[0.3em] text-slate-400 mb-4">
            Development Activity
          </p>

          <h2 className="text-5xl md:text-6xl font-black mb-8">
            GitHub Contributions
          </h2>

          <p className="text-slate-300 text-xl leading-8 max-w-3xl mx-auto">
            I enjoy continuing to learn beyond formal education through
            personal projects, full-stack development, language rewrites,
            and continuous software engineering practice.
          </p>

        </div>

        {/* Main Card */}
        <div
          className="
            bg-slate-900/70
            backdrop-blur-sm
            border
            border-slate-800
            rounded-[2rem]
            p-6
            md:p-10
            shadow-2xl
          "
        >

          {/* Top Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">

            <div className="bg-slate-800 rounded-2xl p-6">

              <p className="text-3xl font-black mb-2">
                Active
              </p>

              <p className="text-slate-400">
                Continuous Learning
              </p>

            </div>

            <div className="bg-slate-800 rounded-2xl p-6">

              <p className="text-3xl font-black mb-2">
                Full Stack
              </p>

              <p className="text-slate-400">
                Personal Projects
              </p>

            </div>

            <div className="bg-slate-800 rounded-2xl p-6">

              <p className="text-3xl font-black mb-2">
                Ongoing
              </p>

              <p className="text-slate-400">
                C# Rewrite Project
              </p>

            </div>

          </div>

          {/* GitHub Graph */}
          <div
            className="
              overflow-x-auto
              bg-slate-950
              border
              border-slate-800
              rounded-3xl
              p-6
            "
          >

            <GitHubCalendar
              username="jjdeuce06"
              blockSize={15}
              blockMargin={5}
              fontSize={14}
              colorScheme="dark"
            />

          </div>

          {/* Bottom Text */}
          <div className="mt-10 text-center">

            <p className="text-slate-500 text-sm leading-7 max-w-2xl mx-auto">
              My GitHub activity reflects ongoing software development work,
              experimentation with new technologies, academic project rewrites,
              and continued learning through hands-on engineering practice.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default GitHubActivity