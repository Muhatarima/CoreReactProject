import React from 'react'
import friends from "../../data/friends.json"
import { useParams } from "react-router-dom";

function FriendDetails() {
  const { id } = useParams()
  const friend = friends.find((item) => item.id === Number(id))

  if (!friend) {
    return <h2 className='text-center mt-10 text-red-500'>Friend not found</h2>
  }

  const { name, picture, days_since_contact, tags, status, bio, email } = friend

  return (
    <div className='max-w-6xl mx-auto flex gap-5 mt-8'>
      <div className='grid gap-3'>
        <div className='w-60 bg-white py-6 rounded-xl shadow'>
          <div className="flex justify-center items-center">
            <img className='w-20 h-20 rounded-full' src={picture} alt={name} />
          </div>

          <h1 className='font-bold text-center mb-4 text-black text-xl'>{name}</h1>

          <p className='text-sm text-center text-[#64748B] mb-3'>
            {days_since_contact}d ago
          </p>

          <div className='flex justify-center mb-3 items-center'>
            <p
              className={`badge text-white rounded-full px-2 border-none py-2 ${
                status === "on-track"
                  ? "bg-green-600"
                  : status === "almost due"
                  ? "bg-amber-300"
                  : "bg-red-500"
              }`}
            >
              {status}
            </p>
          </div>

          <div className='flex mt-1 items-center justify-center gap-2 flex-wrap'>
            {tags.map((tag, index) => (
              <div key={index}>
                <button className='badge rounded-full text-black border-none px-2 py-3 bg-emerald-300'>
                  {tag}
                </button>
              </div>
            ))}
          </div>

          <div className='text-center mt-3 px-3'>
            <p className='text-[#64748B] mb-3 text-sm italic'>{bio}</p>
            <p className='text-[#64748B] mb-1'>
              <small>{email}</small>
            </p>
          </div>
        </div>

        <button className='btn btn-outline hover:text-white w-60 text-black border-2 py-4'>
          Snooze 2 weeks
        </button>
        <button className='btn btn-outline hover:text-white border-2 w-60 text-black py-4'>
          Archive
        </button>
        <button className='btn btn-outline hover:bg-red-600 hover:text-white hover:border-none border-2 w-60 text-red-600 py-4'>
          Delete
        </button>
      </div>

      <div>
        <section>
          <h3 className='text-3xl font-bold text-green-900 my-5 px-6'>About</h3>
          <p className='mb-6 text-[#64748B] px-6'>{bio}</p>
        </section>

        <section>
          <h3 className='text-3xl font-bold text-green-900 my-5 px-6'>Email</h3>
          <p className='mb-6 text-[#64748B] px-6'>{email}</p>
        </section>

        <section>
          <h3 className='text-3xl font-bold text-green-900 my-5 px-6'>Status</h3>
          <p className='mb-6 text-[#64748B] px-6'>{status}</p>
        </section>

        <section>
          <div className='px-6'>
            <h3 className='text-3xl font-bold text-green-900 my-5'>Reminder</h3>
            <button className='btn btn-outline px-4 py-2'>Set Reminder</button>
          </div>
          <p className='px-6 text-[#64748B] mt-2'>Remind yourself to reconnect later.</p>
        </section>

        <section>
          <h3 className='text-3xl font-bold text-green-900 my-5 px-6'>Action</h3>
          <div className='px-6'>
            <button className='btn btn-outline'>Send Message</button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default FriendDetails