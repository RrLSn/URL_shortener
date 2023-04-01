import React, { useState } from 'react'

const Link_shortener = () => {
    const [input, setInput] = useState("")
    const [result, setResult] = useState("")
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const url = 'https://api-ssl.bitly.com/v4/shorten'
    const shortenURL = () => {
        fetch(url,
            {method: 'POST',
             headers: {
                Authorization: `Bearer 68e41a5d40cade18bd47c998b90548ce2a62e494`,
                "Content-Type":'application/json'
             },
             body: JSON.stringify({
                long_url: input,
                domain: "bit.ly",
              })
        })
        .then((response) => response.json())
        .then((data) => {
      setResult(data.link);
    });
    }

    // const clipboard = new ClipboardJS('.btn')
    // clipboard.on

    const handleClick = (e) => {
        e.preventDefault()
        setResult(shortenURL())
    }

  return (
    <div className='w-[96vw] h-[40rem] grid place-items-center'>
        <main className='w-[70%] h-[60vh] bg-white rounded-lg box p-[3rem]'>

            <form onSubmit={handleClick} className='flex gap-[1rem]'>
                <input type="url" value={input} className='w-[50rem] p-[1.5rem] border border-blue-400 placeholder:italic rounded-lg focus:outline-blue-500' placeholder='input URL...' onChange={handleChange} required />
                <button className='bg-blue-700 text-white p-[1.5rem] w-[15rem] rounded-lg text-[1.4rem] font-[500]'>Shorten</button>
            </form>

            <div className='w-[50rem] border border-blue-500 p-[0.5rem] mt-[6rem] flex justify-between'>
                <h1 className='p-[1rem] text-[1.5rem] font-[500]'>{result}</h1>
                <button className='bg-blue-700 p-[1.5rem] w-[auto] rounded-lg flex'><img className='w-[2rem]' src='./Media/copy.svg'/></button>
            </div>
        </main>
    </div>
  )
}

export default Link_shortener