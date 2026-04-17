import React from 'react'

function Loader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-emerald-200 border-t-emerald-700"></div>
        <p className="mt-4 text-slate-600">Loading friends...</p>
      </div>
    </div>
  )
}

export default Loader