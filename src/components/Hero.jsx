function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-slate-950 text-white px-6">
      
      <h1 className="text-6xl font-bold mb-4">
        John Gerega
      </h1>

      <h2 className="text-2xl text-slate-300 mb-6">
        Computer Science Graduate | Full Stack Developer
      </h2>

      <p className="max-w-2xl text-slate-400 text-lg mb-8">
        Passionate about software engineering, full stack development,
        database systems, and building impactful projects that solve
        real-world problems.
      </p>

      <div className="flex gap-4">
        <a
          href="https://github.com/jjdeuce06"
          target="_blank"
          rel="noreferrer"
          className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-slate-300 transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/john-gerega-a2464521a/"
          target="_blank"
          rel="noreferrer"
          className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
        >
          LinkedIn
        </a>
      </div>

    </section>
  )
}

export default Hero