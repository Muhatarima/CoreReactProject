import React from 'react'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-16 bg-[#1F5A50] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="border-b border-white/15 pb-10 text-center">
          <h2 className="text-4xl font-extrabold md:text-6xl">KeenKeeper</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/75 md:text-base">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <h3 className="mt-6 text-lg font-semibold">Social Links</h3>
          <div className="mt-4 flex items-center justify-center gap-3 text-xl">
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1F5A50]">📷</a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1F5A50]">📘</a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1F5A50]">✖️</a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-sm text-white/70 md:flex-row">
          <p>© {year} KeenKeeper. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer