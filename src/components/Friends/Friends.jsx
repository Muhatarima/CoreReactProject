import React from 'react'
import { Link } from 'react-router-dom'

function Friends({ friends }) {
  return (
    <section className="pb-8">
      <div className="mb-6">
        <h2 className="text-3xl font-extrabold text-emerald-900">Your Friends</h2>
        <p className="mt-2 text-slate-600">
          Click a card to open full friend details.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {friends.map((friend) => {
          const { id, name, picture, days_since_contact, tags, status } = friend

          return (
            <Link key={id} to={`/friends/${id}`} className="block">
              <div className="h-full rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex justify-center">
                  <img
                    className="h-20 w-20 rounded-full object-cover"
                    src={picture}
                    alt={name}
                  />
                </div>

                <h3 className="mt-4 text-center text-xl font-bold text-slate-900">
                  {name}
                </h3>

                <p className="mt-2 text-center text-sm text-slate-500">
                  {days_since_contact}d ago
                </p>

                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-900"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex justify-center">
                  <span
                    className={`rounded-full px-3 py-2 text-sm font-semibold text-white ${
                      status === 'on-track'
                        ? 'bg-emerald-600'
                        : status === 'almost due'
                        ? 'bg-amber-400'
                        : 'bg-red-500'
                    }`}
                  >
                    {status}
                  </span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Friends