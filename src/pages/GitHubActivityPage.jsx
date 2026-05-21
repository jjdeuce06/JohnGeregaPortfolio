import Navbar from "../components/NavBar"
import GitHubActivity from "../components/GitHubActivity"
import Footer from "../components/Footer"

function GitHubActivityPage() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />
      <GitHubActivity />
      <Footer />
    </div>
  )
}

export default GitHubActivityPage