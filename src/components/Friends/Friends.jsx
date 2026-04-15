import React from 'react'
import friends from "../../data/friends.json"

function Friends() {
  return (
    <div className='max-w-6xl mx-auto grid mt-6 items-center justify-center gap-7 lg:grid-cols-4'>
      {friends.map((friend) => {
        const { id, name, picture, days_since_contact, tags, status } = friend

        return (
          <div key={id} className='w-60 bg-white py-9'>
            <div className="flex justify-center items-center">
              <img className='w-20 h-20 rounded-full ' src={picture} alt={name} />
            </div>

            <h1 className='font-bold text-center text-black text-xl'>{name}</h1>

            <p className='text-sm text-center text-[#64748B]'>{days_since_contact}d ago</p>

            <div>{tags.map((tag)=>{

              return (
                <div key={index}>
                  <button className='badge rounded-full px-3 py-4 bg-emerald-600 text-white'>{tag}</button>

                </div>
              )
            }
            
            )}</div>

            <p  className={`if {status}==="almost due" ? "badge rounded-full bg-amber-200 px-3 py-4 text-white" :
              if {status}==="on-track" ? "badge rounded-full text-white bg-emerald-800 px-3 py-4 ":
              "badge rounded-full px-3 py-4 bg-red-700 text-white"`} >{status}</p>

           
          </div>
        )
      })}
    </div>
  )
}

export default Friends