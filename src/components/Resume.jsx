function Resume() {
  return (
    <section className="bg-slate-950 text-white px-8 py-32 relative overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">

        <p className="uppercase tracking-[0.3em] text-slate-400 mb-4">
          Professional Experience
        </p>

        <h2 className="text-5xl md:text-6xl font-black mb-8">
          Resume
        </h2>

        <p className="text-slate-300 text-xl leading-8 max-w-3xl mx-auto mb-14">
          View or download my resume to learn more about my experience,
          technical skills, internships, software projects, and academic
          background.
        </p>

        {/* Resume Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">

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
              shadow-lg
            "
          >
            View Resume
          </a>

          <a
            href="/John_Gerega_Complete_Resume.pdf"
            download
            className="
              border
              border-slate-600
              px-8
              py-4
              rounded-2xl
              font-semibold
              hover:bg-slate-800
              transition
              duration-300
            "
          >
            Download PDF
          </a>

        </div>

        {/* Quick Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">

          <div
            className="
              bg-slate-900/70
              backdrop-blur-sm
              border
              border-slate-800
              rounded-3xl
              p-8
            "
          >
            <div className="text-4xl mb-4">🎓</div>

            <h3 className="text-2xl font-bold mb-3">
              Education
            </h3>

            <p className="text-slate-300 leading-7">
              B.S. in Computer Science from Pennsylvania Western University
              with a 3.91 GPA and Summa Cum Laude honors.
            </p>
          </div>

          <div
            className="
              bg-slate-900/70
              backdrop-blur-sm
              border
              border-slate-800
              rounded-3xl
              p-8
            "
          >
            <div className="text-4xl mb-4">💻</div>

            <h3 className="text-2xl font-bold mb-3">
              Experience
            </h3>

            <p className="text-slate-300 leading-7">
              Internship experience in full-stack software development,
              frontend engineering, database management, and Agile workflows.
            </p>
          </div>

          <div
            className="
              bg-slate-900/70
              backdrop-blur-sm
              border
              border-slate-800
              rounded-3xl
              p-8
            "
          >
            <div className="text-4xl mb-4">🏃</div>

            <h3 className="text-2xl font-bold mb-3">
              Leadership & Discipline
            </h3>

            <p className="text-slate-300 leading-7">
              Club Soccer Vice President and marathon runner with a passion for
              continuous learning and personal growth.
            </p>
          </div>

        </div>

        {/* Resume Viewer */}
        <div
          className="
            rounded-3xl
            overflow-hidden
            border
            border-slate-700
            shadow-2xl
            bg-slate-900
          "
        >

          <iframe
            src="/John_Gerega_Complete_Resume.pdf"
            title="Resume"
            className="w-full h-[950px] bg-white"
          />

        </div>

      </div>

    </section>
  )
}

export default Resume