import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'


const Result = ({input}) => {
    const [result, setResult] = useState("")
    const [copied, setCopied] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false)
        }, 1000);
        return () => clearTimeout(timer)
    },[copied])

    const url = `https://api.shrtco.de/v2/shorten?url=${input}`

    const fetchData = async () => {
        try {
            const res = await axios(url)
            setResult(res.data.result.full_short_link)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        if(input.length){
            fetchData()
        }
    },[input])


  return (
    <div className={result != "" ? "shortenedLink" : "hidden"}>
                <h1 className='p-[1rem] lg:text-[1.5rem] font-[500]'>{result}</h1>
                <CopyToClipboard text={result} onCopy={() => setCopied(true)}>
                    <button className={copied ? 'copiedLink' : "bg-blue-700 lg:p-[1.5rem] p-[0.8rem] w-[auto] rounded-lg flex"}>
                        <img className='w-[2rem]' src='./Media/copy.svg'/>
                    </button>
                </CopyToClipboard>
            </div>
  )
}

export default Result