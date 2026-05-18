function Contact() {
  return (
    <section className="bg-slate-900 text-white px-8 py-24">

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-5xl font-bold mb-8">
          Contact
        </h2>

        <p className="text-slate-300 text-lg mb-8">
          Feel free to reach out regarding opportunities,
          collaboration, or projects.
        </p>

        <div className="flex flex-col gap-4 text-lg">

          <a
            href="mailto:jjgerega@email.com"
            className="hover:text-slate-300 transition"
          >
            jjgerega@email.com
          </a>

          <a
            href="https://github.com/jjdeuce06"
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-300 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/john-gerega-a2464521a/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-300 transition"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </section>
  )
}

export default Contact