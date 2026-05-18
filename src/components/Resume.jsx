function Resume() {
  return (
    <section className="bg-slate-950 text-white px-8 pt-32 pb-24">

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Resume
        </h2>

        <p className="text-slate-300 text-lg mb-10">
          View or download my resume to learn more about my
          experience, technical skills, internships, and projects.
        </p>

        <div className="flex justify-center mb-12">

          <a
            href="/John_Gerega_Complete_Resume.pdf"
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
            "
          >
            View Resume
          </a>

        </div>

        <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-lg">

          <iframe
            src="/John_Gerega_Complete_Resume.pdf"
            title="Resume"
            className="w-full h-[900px] bg-white"
          />

        </div>

      </div>

    </section>
  )
}

export default Resume