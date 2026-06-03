import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'

const modules = [
  {
    title: 'Activity logging',
    text: 'Capture workouts, sets, and recovery notes in one place.',
  },
  {
    title: 'Team management',
    text: 'Organize squads, invite members, and keep everyone aligned.',
  },
  {
    title: 'Competitive leaderboard',
    text: 'Track progress across the community with live rankings.',
  },
]

function navClass(isActive: boolean) {
  return `nav-link octofit-link ${isActive ? 'active' : ''}`
}

function Shell() {
  return (
    <div className="octofit-shell">
      <header className="navbar navbar-expand-lg navbar-dark octofit-nav">
        <div className="container py-2">
          <Link className="navbar-brand fw-semibold" to="/">
            OctoFit Tracker
          </Link>
          <nav className="navbar-nav ms-auto gap-2">
            <NavLink className={({ isActive }) => navClass(isActive)} to="/">
              Overview
            </NavLink>
            <NavLink
              className={({ isActive }) => navClass(isActive)}
              to="/training"
            >
              Training
            </NavLink>
            <NavLink className={({ isActive }) => navClass(isActive)} to="/teams">
              Teams
            </NavLink>
            <NavLink
              className={({ isActive }) => navClass(isActive)}
              to="/leaderboard"
            >
              Leaderboard
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="container py-5">
        <Outlet />
      </main>
    </div>
  )
}

function Overview() {
  return (
    <section className="octofit-hero row g-4 align-items-center">
      <div className="col-lg-7">
        <span className="octofit-badge mb-3">Modern multi-tier foundation</span>
        <h1 className="display-4 fw-semibold text-white mb-3">
          Build, log, and compete with a focused fitness platform.
        </h1>
        <p className="lead text-white-50 mb-4">
          The frontend runs on React 19 and Vite, while the backend is ready for
          Express, TypeScript, and MongoDB with Mongoose.
        </p>
        <div className="d-flex flex-wrap gap-3">
          <Link className="btn btn-light btn-lg px-4" to="/training">
            Explore training
          </Link>
          <Link className="btn btn-outline-light btn-lg px-4" to="/leaderboard">
            View leaderboard
          </Link>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="octofit-panel p-4 p-md-5">
          <p className="text-uppercase text-white-50 small mb-2">Stack</p>
          <ul className="list-unstyled mb-0 text-white">
            <li className="py-2 border-bottom border-white border-opacity-10">
              React 19 + Vite on port 5173
            </li>
            <li className="py-2 border-bottom border-white border-opacity-10">
              Express + TypeScript on port 8000
            </li>
            <li className="py-2">MongoDB with Mongoose on port 27017</li>
          </ul>
        </div>
      </div>
      <div className="col-12 mt-2">
        <div className="row g-3">
          {modules.map((module) => (
            <div className="col-md-4" key={module.title}>
              <article className="octofit-card h-100 p-4">
                <h2 className="h5 text-white">{module.title}</h2>
                <p className="text-white-50 mb-0">{module.text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Training() {
  return (
    <div className="octofit-page">
      <h1 className="h2 text-white mb-3">Training</h1>
      <p className="text-white-50 mb-0">
        This route is ready for workout plans, logging forms, and progress charts.
      </p>
    </div>
  )
}

function Teams() {
  return (
    <div className="octofit-page">
      <h1 className="h2 text-white mb-3">Teams</h1>
      <p className="text-white-50 mb-0">
        Team rosters, invitations, and shared goals will live here.
      </p>
    </div>
  )
}

function Leaderboard() {
  return (
    <div className="octofit-page">
      <h1 className="h2 text-white mb-3">Leaderboard</h1>
      <p className="text-white-50 mb-0">
        Competitive rankings and streaks can be connected to MongoDB-backed data.
      </p>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route index element={<Overview />} />
        <Route path="training" element={<Training />} />
        <Route path="teams" element={<Teams />} />
        <Route path="leaderboard" element={<Leaderboard />} />
      </Route>
    </Routes>
  )
}

export default App
