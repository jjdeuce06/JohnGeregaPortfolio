function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-950 text-white flex justify-between items-center px-8 py-4 border-b border-slate-800">
      
      <h1 className="font-bold text-xl">
        John Gerega
      </h1>

      <div className="flex gap-6">
        <a href="#about" className="hover:text-slate-300">
          About
        </a>

        <a href="#projects" className="hover:text-slate-300">
          Projects
        </a>

        <a href="#skills" className="hover:text-slate-300">
          Skills
        </a>
      </div>

    </nav>
  )
}

export default Navbar