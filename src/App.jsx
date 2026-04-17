import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navber from './components/Navber/Navber'
import Footer from './components/Footer/Footer'

function App() {
  const [timeline, setTimeline] = useState(() => {
    try {
      const saved = localStorage.getItem('keenkeeper-timeline')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('keenkeeper-timeline', JSON.stringify(timeline))
  }, [timeline])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navber />
      <Outlet context={{ timeline, setTimeline }} />
      <Footer />
      <ToastContainer position="top-right" autoClose={1500} />
    </div>
  )
}

export default App