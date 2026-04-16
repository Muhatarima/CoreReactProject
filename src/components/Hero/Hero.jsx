import React from 'react'

function Hero() {
  return (
    <div className='max-w-6xl mx-auto my-16 '>
<h1 className='font-bold text-black text-center mb-7 text-4xl'>Friends to keep close in your life</h1>
<p className='text-[#64748B] mb-7 text-center'>
    Your personal shelf of meaningful connections. Browse, tend, and nurture the <br></br>
relationships that matter most.
</p>
<div className='text-center mx-auto'><button className='btn mb-7 border-none  hover:bg-emerald-950 text-white bg-emerald-800'>+ Add a Friend</button>
</div>
<div className='mx-auto grid items-center justify-center gap-2  lg:grid-cols-4'>
    <section className='w-60 bg-neutral-100 shadow-2xl py-9 '>
        <h1 className='font-3xl text-center font-semibold text-emerald-800'>10</h1>
        <p className='text-[#64748B] text-center '>Total Friends</p>
    </section>
    <section className='w-60  bg-neutral-100 shadow-2xl py-9' >
        <h1 className='font-3xl text-center font-semibold text-emerald-800'>3</h1>
        <p className='text-[#64748B] text-center'>On Track</p>
    </section>
    <section className='w-60  bg-neutral-100 shadow-2xl py-9' >
        <h1 className='font-3xl text-center font-semibold text-emerald-800'>6</h1>
        <p className='text-[#64748B] text-center '>Need Attention</p>
    </section>
    <section className='w-60  bg-neutral-100 shadow-2xl py-9' >
        <h1 className='font-3xl text-center font-semibold text-emerald-800'>12</h1>
        <p className='text-[#64748B] text-center'>Interactions  This Month</p>
    </section>
</div>

    </div>
  )
}

export default Hero