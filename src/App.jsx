import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import AboutPage from "./pages/AboutPage"
import ProjectsPage from "./pages/ProjectsPage"
import ResumePage from "./pages/ResumePage"
import ContactPage from "./pages/ContactPage"
import VulcanTrackerPage from "./pages/projectpages/VulcanTrackerPage"
import CompilerConstruction from "./pages/projectpages/CompilerConstruction"
import CareSyncPage from "./pages/projectpages/CareSync"
import CSharp from "./pages/projectpages/CSharp"
import { Link } from "react-router-dom"

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

        <Route
          path="/projects/compiler-construction"
          element={<CompilerConstruction />}
        />

        <Route
          path="/projects/care-sync"
          element={<CareSyncPage />}
        />

        <Route
          path="/projects/CSharp"
          element={<CSharp/>}
        />

        <Route path="/resume" element={<ResumePage />} />

        <Route path="/contact" element={<ContactPage />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App