import React from 'react'

const Link_shortener = () => {
  return (
    <div className='w-[96vw] h-[40rem] grid place-items-center'>
        <main className='w-[70%] h-[60vh] bg-white rounded-lg box p-[3rem]'>
            <div className='w-[50rem] h-[5rem] bg-blue-700 text-white text-[1.5rem] font-[500] flex justify-center items-center rounded-lg mb-[1rem]'>
                <h1>PLEASE PROVIDE A VALID URL</h1>
            </div>
            <div className='flex gap-[1rem]'>
            <input type="text" className='w-[50rem] p-[1.5rem] border border-blue-400 placeholder:italic rounded-lg focus:outline-blue-500' placeholder='input URL...' required />
            <button className='bg-blue-700 text-white p-[1.5rem] w-[15rem] rounded-lg text-[1.4rem] font-[500]'>Shorten</button>
            </div>
        </main>
    </div>
  )
}

export default Link_shortener