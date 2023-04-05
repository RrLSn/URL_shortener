import React, {useState } from 'react'
import Result from './Result'

const Link_shortener = () => {
    const [inputValue, setinputValue] = useState('')
    const [input, setInput] = useState("")
   
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        setinputValue(input)
        setInput('')
    }


  return (
    <div className='w-[96vw] lg:h-[40rem] lg:grid place-items-center'>
        <main className='lg:w-[70%] w-[90%] lg:h-[60vh] bg-white rounded-lg box lg:p-[3rem] p-[2rem]'>
            <div className={`${!inputValue.startsWith('https://') ? 'warning' : "hidden"}`}>
                <h1 >URL is required to be shorten</h1>
            </div>

            <form onSubmit={handleClick} className='flex gap-[1rem]'>
                <input type="url" value={input} className='lg:w-[50rem] lg:p-[1.5rem] p-[1rem] border border-blue-400 placeholder:italic rounded-lg focus:outline-blue-500' placeholder='input URL...' onChange={handleChange} required />
                <button className='bg-blue-700 text-white p-[0.5rem] lg:p-[1.5rem] lg:w-[15rem] rounded-lg lg:text-[1.4rem] font-[500]'>Shorten</button>
            </form>
            <Result input={inputValue}/>
        </main>
    </div>
  )
}

export default Link_shortener