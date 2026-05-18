function Hero() {
  return (
    <section
      className="
        min-h-screen
        flex
        flex-col
        justify-center
        items-center
        text-center
        bg-slate-950
        text-white
        px-6
      "
    >

      <p className="text-slate-400 mb-4 uppercase tracking-[0.3em]">
        Software Engineer
      </p>

      <h1 className="text-6xl md:text-8xl font-black mb-6">
        John Gerega
      </h1>

      <h2 className="text-2xl md:text-3xl text-slate-300 mb-8">
        Full Stack Developer • Marathon Runner • Problem Solver
      </h2>

      <p className="max-w-2xl text-slate-400 text-lg leading-8 mb-10">
        Computer Science graduate passionate about building scalable
        software, solving technical challenges, and developing projects
        that combine real-world impact with clean engineering.
      </p>

      <div className="flex flex-wrap justify-center gap-4">

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
            hover:bg-slate-300
            transition
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
            border-white
            px-8
            py-4
            rounded-2xl
            font-semibold
            hover:bg-white
            hover:text-black
            transition
          "
        >
          LinkedIn
        </a>

      </div>

    </section>
  )
}

export default Hero