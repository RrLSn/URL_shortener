import React, { useEffect, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

const Link_shortener = () => {
    const [input, setInput] = useState("")
    const [result, setResult] = useState("")
    const [copied, setCopied] = useState(false)
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

    const handleClick = (e) => {
        e.preventDefault()
        setResult(shortenURL())
    }

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setCopied(false)
    //     }, 1000);
    //     return () => clearTimeout(timer)
    // },[copied])

  return (
    <div className='w-[96vw] lg:h-[40rem] lg:grid place-items-center'>
        <main className='lg:w-[70%] w-[90%] lg:h-[60vh] bg-white rounded-lg box lg:p-[3rem] p-[2rem]'>

            <form onSubmit={handleClick} className='flex gap-[1rem]'>
                <input type="url" value={input} className='lg:w-[50rem] lg:p-[1.5rem] p-[1rem] border border-blue-400 placeholder:italic rounded-lg focus:outline-blue-500' placeholder='input URL...' onChange={handleChange} required />
                <button className='bg-blue-700 text-white p-[0.5rem] lg:p-[1.5rem] lg:w-[15rem] rounded-lg lg:text-[1.4rem] font-[500]'>Shorten</button>
            </form>

            <div className='lg:w-[50rem] w-[19rem] border border-blue-500 lg:p-[0.5rem] lg:mt-[6rem] mt-[2rem] flex justify-between'>
                <h1 className='p-[1rem] lg:text-[1.5rem] font-[500]'>{result}</h1>
                <CopyToClipboard text={result} onCopy={() => setCopied(true)}>
                    <button className={`bg-blue-700 lg:p-[1.5rem] p-[0.8rem] w-[auto] rounded-lg flex ${copied ? 'copied' : ""}`}>
                        <img className='w-[2rem]' src='./Media/copy.svg'/>
                    </button>
                </CopyToClipboard>
            </div>
        </main>
    </div>
  )
}

export default Link_shortener