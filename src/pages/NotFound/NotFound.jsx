import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
        <h1 className="text-6xl font-extrabold text-emerald-900">404</h1>
        <p className="mt-4 text-lg text-slate-600">Page not found.</p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-full bg-emerald-700 px-6 py-3 font-semibold text-white"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound