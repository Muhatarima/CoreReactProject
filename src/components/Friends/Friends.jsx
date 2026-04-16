import React from 'react'
import friends from "../../data/friends.json"
import { Link } from 'react-router-dom'


function Friends() {
  return (
    <div className='max-w-6xl mx-auto grid mt-6 items-center justify-center gap-7 lg:grid-cols-4'>
      {friends.map((friend) => {
        const { id, name, picture, days_since_contact, tags, status } = friend

        return (
        <Link to={`/friends/${id}`}    key={id} >
          <div   className='w-60 bg-white py-9'>
            <div className="flex justify-center items-center">
              <img className='w-20 h-20 rounded-full ' src={picture} alt={name} />
            </div>

            <h1 className='font-bold text-center mb-4 text-black text-xl'>{name}</h1>

            <p className='text-sm text-center text-[#64748B]'>{days_since_contact}d ago</p>

            <div className='flex mt-1 items-center justify-center gap-2'>{tags.map((tag,index)=>{

              return (
                <div key={index}>
                  <button className='badge rounded-full text-black border-none  px-2 py-3 mb-4 bg-emerald-300 '>{tag}</button>

                </div>
              )
            }
            
            )}</div>
                

                  <div className='flex justify-center mb-3 items-center'>                 <p className={`badge text-white rounded-full px-2 border-none py-2 ${ status ==="on-track"?"bg-green-600": status ==="almost due" ? "bg-amber-300":"bg-red-500"}`}>{status}</p>
</div>
           
          </div>
        
        </Link>
        )
      })}
    </div>
  )   
}

export default Friends