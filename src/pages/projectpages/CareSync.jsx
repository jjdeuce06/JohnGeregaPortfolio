import Navbar from "../../components/NavBar"
import Footer from "../../components/Footer"
import { Link } from "react-router-dom"

function CareSync() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      <section className="px-8 pt-40 pb-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-slate-400 uppercase tracking-[0.3em] mb-4">
            Healthcare Internship Project
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-8">
            CareSync Medical Dashboard
          </h1>

          <p className="text-slate-300 text-xl leading-9 max-w-4xl mb-10">
            A HIPAA-compliant medical patient dashboard developed during a
            summer software engineering internship. The project focused on
            secure patient intake workflows, frontend usability, backend
            integration, and collaborative full-stack development within an
            Agile team environment.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Full Stack Development",
              "Frontend Development",
              "Backend Development",
              "Database Design",
              "HIPAA Compliance",
              "GitHub",
              "Azure DevOps",
              "Agile",
            ].map((tech, index) => (
              <span
                key={index}
                className="
                  bg-slate-800
                  text-slate-300
                  px-4
                  py-2
                  rounded-full
                  text-sm
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Project Screenshot */}
      <section className="px-8 pb-24">

        <div className="max-w-6xl mx-auto">

          <img
            src="/images/CareSync.png"
            alt="CareSync Medical Dashboard"
            className="
              rounded-3xl
              border
              border-slate-800
              shadow-2xl
              w-full
            "
          />

        </div>

      </section>

      <section className="px-8 pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Project Overview</h2>

          <p className="text-slate-300 text-lg leading-8 mb-6">
            This project was developed during a summer internship focused on
            building a HIPAA-compliant patient dashboard application for
            healthcare intake and management workflows.
          </p>

          <p className="text-slate-300 text-lg leading-8">
            The application allowed medical intake data to be securely processed
            and organized through a user-friendly dashboard while supporting
            collaboration between frontend, backend, and database systems.
          </p>
        </div>
      </section>

      <section className="px-8 pb-24 bg-slate-900">
        <div className="max-w-5xl mx-auto py-20">
          <h2 className="text-4xl font-bold mb-12">Responsibilities</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Frontend Development
              </h3>

              <p className="text-slate-300 leading-7">
                Focused heavily on frontend development, improving application
                design, navigation flow, and ensuring users were redirected
                correctly throughout the dashboard experience.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Backend & Database Integration
              </h3>

              <p className="text-slate-300 leading-7">
                Toward the end of the internship, transitioned into backend
                development responsibilities after a team member departed the
                project. Updated database schemas and repaired relationships
                between frontend forms and backend data handling to ensure
                intake information was properly received and stored.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Team Collaboration
              </h3>

              <p className="text-slate-300 leading-7">
                Collaborated within a full-stack development team using GitHub
                and Microsoft Azure DevOps for version control, task tracking,
                and sprint-based project management.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Agile Workflow</h3>

              <p className="text-slate-300 leading-7">
                Participated in weekly status meetings with the project manager
                to review progress, discuss blockers, and coordinate development
                priorities throughout the internship.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Technical Contributions</h2>

          <p className="text-slate-300 text-lg leading-8 mb-6">
            One of the primary responsibilities during the internship was
            building and refining frontend dashboard components to improve user
            experience and ensure reliable workflow navigation throughout the
            application.
          </p>

          <p className="text-slate-300 text-lg leading-8 mb-6">
            As project needs evolved, backend development responsibilities were
            added, including database schema restructuring and connecting intake
            form submissions from the frontend to backend storage systems.
          </p>

          <p className="text-slate-300 text-lg leading-8">
            The project also provided experience working within a collaborative
            Agile environment while using professional development tools such as
            GitHub and Microsoft Azure DevOps.
          </p>
        </div>
      </section>

      <section className="px-8 pb-24 bg-slate-900">
        <div className="max-w-4xl mx-auto py-20">
          <h2 className="text-4xl font-bold mb-8">Project Outcome</h2>

          <p className="text-slate-300 text-lg leading-8 mb-6">
            The dashboard project continued development after the internship
            concluded and was ultimately launched for continued use,
            demonstrating the long-term value and sustainability of the team's
            work.
          </p>

          <p className="text-slate-300 text-lg leading-8">
            This experience provided valuable exposure to healthcare software
            development, secure data handling practices, collaborative software
            engineering, and full-stack application workflows.
          </p>
        </div>
      </section>

      <section className="px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Lessons Learned</h2>

          <p className="text-slate-300 text-lg leading-8 mb-6">
            This internship strengthened my experience in frontend design,
            backend integration, database structure management, and collaborative
            software engineering practices within a professional environment.
          </p>

          <p className="text-slate-300 text-lg leading-8">
            It also reinforced the importance of adaptability, communication,
            and problem-solving when contributing to active software projects
            with evolving requirements and timelines.
          </p>

          <div className="flex justify-center mt-12">
            <Link
              to="/projects"
              className="
                border
                border-slate-700
                px-6
                py-3
                rounded-2xl
                text-slate-300
                hover:bg-slate-800
                hover:text-white
                transition
              "
            >
              ← Back to Projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CareSync