function Resume() {
  return (
    <section className="bg-slate-950 text-white px-8 py-24">

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-5xl font-bold mb-8">
          Resume
        </h2>

        <p className="text-slate-300 text-lg mb-8">
          Download my resume to learn more about my experience,
          technical skills, and projects.
        </p>

        <a
          href="/resume.pdf"
          target="_blank"
          className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-slate-300 transition"
        >
          View Resume
        </a>

      </div>

    </section>
  )
}

export default Resume