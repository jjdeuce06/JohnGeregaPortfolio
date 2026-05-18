import Navbar from "../components/NavBar"
import Projects from "../components/Projects"
import Footer from "../components/Footer"
import { motion } from "framer-motion"

function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Projects />
      <Footer />
    </motion.div>
  )
}

export default ProjectsPage