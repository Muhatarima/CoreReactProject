import React from 'react'
import friends from "../../data/friends.json"

function Friends() {
  return (
    <div>
      {friends.map((friend) => {
        const { id, name, picture, days_since_contact, tags, status } = friend

        return (
          <div key={id}>
            <div>
              <img src={picture} alt={name} />
            </div>

            <h1>{name}</h1>

            <p>{days_since_contact}d ago</p>

            <p>{status}</p>

           
          </div>
        )
      })}
    </div>
  )
}

export default Friends