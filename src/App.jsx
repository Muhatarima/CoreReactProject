import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

function App() {
  const [timeline, setTimeline] = useState([])

  return (
    <div style={{ padding: "30px", color: "black" }}>
      <h1>App is working</h1>
      <Outlet context={{ timeline, setTimeline }} />
    </div>
  )
}

export default App