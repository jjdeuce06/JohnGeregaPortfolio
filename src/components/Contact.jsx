function Contact() {
  return (
    <section className="bg-slate-900 text-white px-8 py-32 relative overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">

        <p className="uppercase tracking-[0.3em] text-slate-400 mb-4">
          Get In Touch
        </p>

        <h2 className="text-5xl md:text-6xl font-black mb-8">
          Contact
        </h2>

        <p className="text-slate-300 text-xl leading-8 max-w-2xl mx-auto mb-16">
          Feel free to reach out regarding software engineering opportunities,
          collaboration, projects, or just to connect.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Email */}
          <a
            href="mailto:jjgerega@email.com"
            className="
              bg-slate-800/70
              backdrop-blur-sm
              border
              border-slate-700
              rounded-3xl
              p-8
              hover:-translate-y-2
              hover:border-slate-500
              transition
              duration-300
            "
          >
            <div className="text-4xl mb-4">✉️</div>

            <h3 className="text-2xl font-bold mb-3">
              Email
            </h3>

            <p className="text-slate-300 break-all">
              jjgerega@email.com
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/jjdeuce06"
            target="_blank"
            rel="noreferrer"
            className="
              bg-slate-800/70
              backdrop-blur-sm
              border
              border-slate-700
              rounded-3xl
              p-8
              hover:-translate-y-2
              hover:border-slate-500
              transition
              duration-300
            "
          >
            <div className="text-4xl mb-4">💻</div>

            <h3 className="text-2xl font-bold mb-3">
              GitHub
            </h3>

            <p className="text-slate-300">
              View Projects
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/john-gerega-a2464521a/"
            target="_blank"
            rel="noreferrer"
            className="
              bg-slate-800/70
              backdrop-blur-sm
              border
              border-slate-700
              rounded-3xl
              p-8
              hover:-translate-y-2
              hover:border-slate-500
              transition
              duration-300
            "
          >
            <div className="text-4xl mb-4">🔗</div>

            <h3 className="text-2xl font-bold mb-3">
              LinkedIn
            </h3>

            <p className="text-slate-300">
              Connect Professionally
            </p>
          </a>

        </div>

        {/* Bottom Text */}
        <div className="mt-20">

          <p className="text-slate-500 text-sm tracking-wide">
            Built with React and Tailwind CSS.
          </p>

        </div>

      </div>

    </section>
  )
}

export default Contact