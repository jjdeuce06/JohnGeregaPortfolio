import { Link, NavLink } from "react-router-dom"

function Navbar() {

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-white"
      : "text-slate-300 hover:text-white transition"

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-white font-bold text-2xl"
        >
          John Gerega
        </Link>

        <div className="hidden md:flex gap-6 font-medium">

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>

          <NavLink to="/github-activity" className={navLinkClass}>
            Activity
          </NavLink>

          <NavLink to="/resume" className={navLinkClass}>
            Resume
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>

        </div>

      </div>

    </nav>
  )
}

export default Navbar