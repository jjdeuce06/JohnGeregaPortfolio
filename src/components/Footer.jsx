function Footer() {
  return (
    <footer className="bg-black text-slate-400 py-8 text-center">

      <p className="mb-4">
        © 2026 John Gerega
      </p>

      <div className="flex justify-center gap-6">

        <a
          href="https://github.com/jjdeuce06"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white"
        >
          LinkedIn
        </a>

      </div>

    </footer>
  )
}

export default Footer