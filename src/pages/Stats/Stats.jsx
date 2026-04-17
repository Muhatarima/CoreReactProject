import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

function Stats() {
  const { timeline } = useOutletContext()

  const callCount = timeline.filter((item) => item.type === 'Call').length
  const textCount = timeline.filter((item) => item.type === 'Text').length
  const videoCount = timeline.filter((item) => item.type === 'Video').length

  const data = [
    { name: 'Call', value: callCount },
    { name: 'Text', value: textCount },
    { name: 'Video', value: videoCount },
  ]

  const total = callCount + textCount + videoCount
  const colors = ['#047857', '#0284c7', '#7c3aed']

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-4xl font-extrabold text-emerald-900">
        Friendship Analytics
      </h1>
      <p className="mt-2 text-slate-600">
        See how you are keeping in touch over time.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Calls</p>
          <h3 className="mt-2 text-3xl font-extrabold text-emerald-900">
            {callCount}
          </h3>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Texts</p>
          <h3 className="mt-2 text-3xl font-extrabold text-emerald-900">
            {textCount}
          </h3>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Videos</p>
          <h3 className="mt-2 text-3xl font-extrabold text-emerald-900">
            {videoCount}
          </h3>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
        {total === 0 ? (
          <p className="text-slate-500">
            No interaction data yet. Add Call, Text, or Video from a friend detail page.
          </p>
        ) : (
          <div className="h-[360px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={120}
                  label
                >
                  {data.map((entry, index) => (
                    <Cell key={entry.name} fill={colors[index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  )
}

export default Stats