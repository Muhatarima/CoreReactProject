import React, { useMemo, useState } from 'react'
import { useOutletContext } from 'react-router-dom'

function Timeline() {
  const { timeline } = useOutletContext()
  const [filter, setFilter] = useState('All')

  const filteredTimeline = useMemo(() => {
    if (filter === 'All') return timeline
    return timeline.filter((item) => item.type === filter)
  }, [timeline, filter])

  const getIcon = (type) => {
    if (type === 'Call') return '📞'
    if (type === 'Text') return '💬'
    return '🎥'
  }

  const buttonClass = (value) =>
    `rounded-full px-4 py-2 font-medium transition ${
      filter === value
        ? 'bg-emerald-700 text-white'
        : 'bg-white text-slate-700 hover:bg-emerald-100'
    }`

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-4xl font-extrabold text-emerald-900">Timeline</h1>
      <p className="mt-2 text-slate-600">
        History of all calls, texts, and video check-ins.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <button onClick={() => setFilter('All')} className={buttonClass('All')}>
          All
        </button>
        <button onClick={() => setFilter('Call')} className={buttonClass('Call')}>
          Call
        </button>
        <button onClick={() => setFilter('Text')} className={buttonClass('Text')}>
          Text
        </button>
        <button onClick={() => setFilter('Video')} className={buttonClass('Video')}>
          Video
        </button>
      </div>

      <div className="mt-8 space-y-4">
        {filteredTimeline.length === 0 ? (
          <div className="rounded-2xl bg-white p-6 text-slate-500 shadow-sm">
            No timeline entries yet.
          </div>
        ) : (
          filteredTimeline.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white p-5 shadow-sm"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-2xl">
                    {getIcon(item.type)}
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">{item.title}</p>
                    <p className="text-sm text-slate-500">{item.date}</p>
                  </div>
                </div>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                  {item.type}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Timeline