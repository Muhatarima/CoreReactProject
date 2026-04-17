import React from 'react'
import { NavLink } from 'react-router-dom'

function Navber() {
  const navClass = ({ isActive }) =>
    `px-4 py-2 rounded-full font-medium transition ${
      isActive
        ? 'bg-emerald-700 text-white'
        : 'text-slate-700 hover:bg-emerald-100'
    }`

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <NavLink to="/" className="text-3xl font-extrabold text-emerald-900">
          KeenKeeper
        </NavLink>

        <div className="flex items-center gap-2">
          <NavLink to="/" className={navClass}>
            <span className="mr-2">🏠</span>
            Home
          </NavLink>
          <NavLink to="/timeline" className={navClass}>
            <span className="mr-2">📜</span>
            Timeline
          </NavLink>
          <NavLink to="/stats" className={navClass}>
            <span className="mr-2">📊</span>
            Stats
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navber