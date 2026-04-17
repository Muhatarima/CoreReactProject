import React from 'react'
import { useOutletContext } from 'react-router-dom'

function Timeline() {
  const { timeline } = useOutletContext()

  return (
    <div className='max-w-4xl mx-auto mt-8'>
      <h1 className='text-3xl font-bold mb-6'>Timeline</h1>

      {timeline.length === 0 ? (
        <p className='text-gray-500'>No timeline yet</p>
      ) : (
        timeline.map((item) => (
          <div key={item.id} className='border rounded-xl p-4 mb-4'>
            <p className='text-sm text-gray-500'>{item.date}</p>
            <h3 className='font-bold'>{item.title}</h3>
            <p>{item.type}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default Timeline