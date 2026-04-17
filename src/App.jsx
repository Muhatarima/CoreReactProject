import Navber from "./components/Navber/Navber"
import Hero from "./components/Hero/Hero"
import Friends from "./components/Friends/Friends"
import friiends from './data/friends.json'
import FriendDetails from "./components/Friends/FriendDetails"
import { Outlet } from 'react-router-dom'
import Footer from "./components/Footer/Footer";


function App() {

  return (
    <>
    
    <div className="min-h-screen  bg-gray-50 "  >
      <Navber></Navber>
      <Hero></Hero>
      <Outlet />
      <Footer />
    
  </div>
    </>
  
  )
}

export default App
 