import React from 'react'

function Hero({ friends, timeline }) {
  const overdue = friends.filter((friend) => friend.status === 'overdue').length
  const almostDue = friends.filter((friend) => friend.status === 'almost due').length
  const onTrack = friends.filter((friend) => friend.status === 'on-track').length

  const cards = [
    { title: 'Total Friends', value: friends.length, icon: '👥' },
    { title: 'Overdue', value: overdue, icon: '🔴' },
    { title: 'Almost Due', value: almostDue, icon: '🟡' },
    { title: 'Check-Ins', value: timeline.length, icon: '⚡' },
  ]

  return (
    <section className="py-8">
      <div className="rounded-3xl bg-emerald-900 px-6 py-12 text-center text-white">
        <h1 className="text-4xl font-extrabold md:text-6xl">
          Keep Your Friendships Alive
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">
          Track meaningful relationships, stay consistent, and never lose touch
          with the people who matter most.
        </p>

        <button className="mt-6 rounded-full bg-white px-6 py-3 font-semibold text-emerald-900 shadow transition hover:scale-105">
          <span className="mr-2">➕</span>
          Add a Friend
        </button>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div key={card.title} className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-2xl">{card.icon}</p>
            <h3 className="mt-3 text-slate-500">{card.title}</h3>
            <p className="mt-2 text-3xl font-extrabold text-emerald-900">
              {card.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-2xl bg-white p-4 text-sm text-slate-600 shadow-sm">
        Currently on track: <span className="font-bold text-emerald-800">{onTrack}</span>
      </div>
    </section>
  )
}

export default Hero