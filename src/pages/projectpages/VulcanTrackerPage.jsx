import Navbar from "../../components/NavBar"
import Footer from "../../components/Footer"

function VulcanTrackerPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">

      <Navbar />

      {/* Hero Section */}
      <section className="px-8 pt-40 pb-24">

        <div className="max-w-6xl mx-auto">

          <p className="text-slate-400 uppercase tracking-[0.3em] mb-4">
            Featured Project
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-8">
            Vulcan Activity Tracker
          </h1>

          <p className="text-slate-300 text-xl leading-9 max-w-4xl mb-10">
            A full stack fitness tracking platform inspired by my passion
            for endurance athletics, activity tracking technology, and
            real-world software engineering challenges.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">

            {[
              "Python",
              "Flask",
              "SQL Server",
              "Docker",
              "JavaScript",
              "HTML/CSS",
              "Git",
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

          <a
            href="https://github.com/jjdeuce06/VulcanActivityTracker"
            target="_blank"
            rel="noreferrer"
            className="
              inline-block
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
            "
          >
            View GitHub Repository
          </a>

        </div>

      </section>


      {/* Project Screenshot */}
      <section className="px-8 pb-24">

        <div className="max-w-6xl mx-auto">

          <img
            src="/images/VulcanActivityTracker.png"
            alt="Vulcan Activity Tracker"
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


      {/* Overview */}
        <section className="px-8 pb-24">

        <div className="max-w-4xl mx-auto">

            <h2 className="text-4xl font-bold mb-8">
            Project Overview
            </h2>

            <p className="text-slate-300 text-lg leading-8 mb-6">
            Vulcan Activity Tracker began as a small personal project during
            my sophomore year of college as a way to strengthen my understanding
            of databases, backend development, and full stack application design.
            Over time, the project continued to grow in scope and complexity,
            eventually evolving into my university capstone project.
            </p>

            <p className="text-slate-300 text-lg leading-8 mb-6">
            The platform was developed alongside teammates Margo Bonal and
            Luke Ruffing, combining collaborative software engineering with a
            shared interest in building a practical fitness-focused application.
            Throughout development, we expanded the project to support
            activity tracking, teams, clubs, leaderboards, route mapping,
            and sport-specific analytics.
            </p>

            <p className="text-slate-300 text-lg leading-8">
            The project was heavily inspired by my own passion for endurance
            athletics, marathon training, and activity tracking technology,
            with the goal of building software that connected real-world
            functionality with meaningful user experiences.
            </p>

        </div>

        </section>


      {/* Features */}
        <section className="px-8 pb-24 bg-slate-900">

        <div className="max-w-5xl mx-auto py-20">

            <h2 className="text-4xl font-bold mb-12">
            Key Features
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-slate-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">
                Activity Tracking
                </h3>

                <p className="text-slate-300 leading-7">
                Users can log multiple activity types including running,
                lifting, biking, swimming, soccer, yoga, and walking with
                sport-specific metrics and analytics.
                </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">
                Clubs & Social Features
                </h3>

                <p className="text-slate-300 leading-7">
                Developed functionality allowing users to create clubs and
                connect with friends, helping communities stay engaged through
                shared activities and fitness participation.
                </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">
                Campus Leaderboards
                </h3>

                <p className="text-slate-300 leading-7">
                Built leaderboard systems designed to encourage friendly
                competition across campus through activity totals,
                rankings, and sport-specific performance tracking.
                </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">
                Challenges System
                </h3>

                <p className="text-slate-300 leading-7">
                Added challenge creation and participation features allowing
                friends and groups to compete through custom fitness goals
                and activity-based competitions.
                </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">
                Team & Coach Invitations
                </h3>

                <p className="text-slate-300 leading-7">
                Developed an inbox and invitation system where official
                coaches and club presidents could invite users to teams
                and organizations, with support for accepting or rejecting
                invitations directly within the platform.
                </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">
                Route Mapping
                </h3>

                <p className="text-slate-300 leading-7">
                Added route storage and map-based activity tracking
                functionality using coordinate data and JSON structures.
                </p>
            </div>

            </div>

        </div>

        </section>


      {/* Technical Challenges */}
      <section className="px-8 py-24">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-4xl font-bold mb-8">
            Technical Challenges
          </h2>

          <p className="text-slate-300 text-lg leading-8 mb-6">
            Throughout development, I worked extensively with Flask
            Blueprints, SQL Server integration, Docker containerization,
            dynamic frontend rendering, and JSON-based activity data
            structures.
          </p>

          <p className="text-slate-300 text-lg leading-8 mb-6">
            One major challenge involved designing flexible activity
            storage capable of supporting many sport-specific metrics
            while maintaining clean database architecture and scalable
            backend logic.
          </p>

          <p className="text-slate-300 text-lg leading-8">
            Additional challenges included leaderboard aggregation,
            team permission systems, authentication workflows, route
            mapping, and debugging SQL Server conversion and query issues.
          </p>

        </div>

      </section>


      {/* Lessons Learned */}
      <section className="px-8 pb-24 bg-slate-900">

        <div className="max-w-4xl mx-auto py-20">

          <h2 className="text-4xl font-bold mb-8">
            Lessons Learned
          </h2>

          <p className="text-slate-300 text-lg leading-8 mb-6">
            This project significantly strengthened my understanding of
            full stack application architecture, backend API development,
            database design, authentication systems, and collaborative
            software development workflows.
          </p>

          <p className="text-slate-300 text-lg leading-8">
            It also reinforced the importance of iterative development,
            debugging, scalability, and designing software around real
            user experiences and practical functionality.
          </p>

        </div>

      </section>

      <Footer />

    </div>
  )
}

export default VulcanTrackerPage