function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-white font-bold text-2xl">
          John Gerega
        </h1>

        <div className="flex gap-6 text-slate-300 font-medium">

          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>

        </div>

      </div>

    </nav>
  )
}

export default Navbar