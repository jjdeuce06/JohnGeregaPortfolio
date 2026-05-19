import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import AboutPage from "./pages/AboutPage"
import ProjectsPage from "./pages/ProjectsPage"
import ResumePage from "./pages/ResumePage"
import ContactPage from "./pages/ContactPage"
import VulcanTrackerPage from "./pages/projectpages/VulcanTrackerPage"

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/projects" element={<ProjectsPage />} />

        <Route
          path="/projects/vulcan-activity-tracker"
          element={<VulcanTrackerPage />}
        />

        <Route path="/resume" element={<ResumePage />} />

        <Route path="/contact" element={<ContactPage />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App