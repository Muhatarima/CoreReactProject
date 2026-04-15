import React, { useState } from 'react'

const Navber = () => {

    const [Active,setActive]=useState("Home")
  return (
    <div  className="min-h-screen text-black bg-white">


<div className="navbar px-8 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
     
    </div>
<p className=" font-bold text-2xl">
  <span>
    Keen<span className="text-green-800">Keeper</span>
  </span>
</p>  </div>
  
  <div className="navbar-end gap-2">
    <button onClick={()=>setActive("Home")} className={Active === "Home" ? "btn btn-primary bg-emerald-900" : "btn btn-outline" } >Home</button>
    <button onClick={()=>setActive("Timeline")} className={Active === "Timeline" ? " btn btn-primary bg-emerald-900" : "btn btn-outline"} >Timeline</button>
    <button onClick={()=>setActive("Stats")} className={Active === "Stats" ? "btn btn-primary bg-emerald-900" : "btn btn-outline"} >Stats</button>
  </div>
</div>



        
    </div>
  )
}

export default Navber;