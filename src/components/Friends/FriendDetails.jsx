import React, { useEffect, useState } from 'react'
import { Link, useOutletContext, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loader from '../Loader/Loader'

function FriendDetails() {
  const { id } = useParams()
  const { timeline, setTimeline } = useOutletContext()
  const [friend, setFriend] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadFriend = async () => {
      try {
        const res = await fetch('/friends.json')
        const data = await res.json()
        const found = data.find((item) => item.id === Number(id))
        setFriend(found || null)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    loadFriend()
  }, [id])

  if (loading) return <Loader />

  if (!friend) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-3xl font-bold text-red-500">Friend not found</h2>
      </div>
    )
  }

  const {
    name,
    picture,
    days_since_contact,
    tags,
    status,
    bio,
    email,
    goal,
    next_due_date,
  } = friend

  function handleAddTimeline(type) {
    const newEntry = {
      id: Date.now(),
      type,
      title: `${type} with ${name}`,
      friendName: name,
      date: new Date().toLocaleDateString(),
    }

    setTimeline([newEntry, ...timeline])
    toast.success(`${type} logged`)
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Link
        to="/"
        className="mb-6 inline-flex rounded-full bg-emerald-100 px-4 py-2 font-medium text-emerald-900"
      >
        ← Back Home
      </Link>

      <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
        <div className="space-y-4">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex justify-center">
              <img
                className="h-24 w-24 rounded-full object-cover"
                src={picture}
                alt={name}
              />
            </div>

            <h1 className="mt-4 text-center text-2xl font-extrabold text-slate-900">
              {name}
            </h1>

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

            <p className="mt-5 text-center text-slate-600">{bio}</p>
            <p className="mt-3 text-center text-sm text-slate-500">{email}</p>
          </div>

          <button className="w-full rounded-xl border border-slate-300 px-4 py-3 font-medium text-slate-800 transition hover:bg-slate-100">
            ⏰ Snooze 2 Weeks
          </button>
          <button className="w-full rounded-xl border border-slate-300 px-4 py-3 font-medium text-slate-800 transition hover:bg-slate-100">
            📦 Archive
          </button>
          <button className="w-full rounded-xl border border-red-300 px-4 py-3 font-medium text-red-600 transition hover:bg-red-600 hover:text-white">
            🗑️ Delete
          </button>
        </div>

        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">Days Since Contact</p>
              <h3 className="mt-2 text-3xl font-extrabold text-emerald-900">
                {days_since_contact}
              </h3>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">Goal</p>
              <h3 className="mt-2 text-3xl font-extrabold text-emerald-900">
                {goal} days
              </h3>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">Next Due Date</p>
              <h3 className="mt-2 text-xl font-extrabold text-emerald-900">
                {next_due_date}
              </h3>
            </div>
          </div>

          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-2xl font-extrabold text-emerald-900">
                Relationship Goal
              </h3>
              <button className="rounded-full bg-emerald-100 px-4 py-2 font-medium text-emerald-900">
                Edit
              </button>
            </div>

            <p className="mt-4 text-slate-600">
              Connect every{' '}
              <span className="font-bold text-slate-900">{goal} days</span> to
              keep this relationship warm and consistent.
            </p>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-extrabold text-emerald-900">
              Quick Check-In
            </h3>
            <p className="mt-2 text-slate-600">
              Add a timeline entry instantly.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <button
                onClick={() => handleAddTimeline('Call')}
                className="rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-800"
              >
                📞 Call
              </button>
              <button
                onClick={() => handleAddTimeline('Text')}
                className="rounded-xl bg-sky-600 px-5 py-3 font-semibold text-white transition hover:bg-sky-700"
              >
                💬 Text
              </button>
              <button
                onClick={() => handleAddTimeline('Video')}
                className="rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-700"
              >
                🎥 Video
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default FriendDetails