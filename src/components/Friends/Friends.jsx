import React from 'react'

function Friends() {
    const {id , name , picture , days_since_contact , tags , status} = friend 
  return (
    <div>
        {Friends.map((friend)=>{


    <div>
       <div>
        <img src="{friend.picture}" alt="" />
       </div>
       <h1>{friend.name}</h1>
       <p>
            {`${friend.days_since_contact}d ago`}
       </p>


    </div>


        })}
    </div>
  )
}

export default Friends