import React, { useState } from 'react'

const ShowMyName = () => {
    
    const [name,setName] = useState("")

    const handleZaw = () => {
        setName(name + " ZAW");
    }
    const handleAUNG = () => {
        setName(name + " AUNG");
    }
    const handleHTWE = () => {
        setName(name + " HTWE");
    }
    const handleClear = () => {
        setName("");
    }

  return (
    <div>
        <h1 className='text-4xl font-bold '>My Name "{name}"</h1>
        <button onClick={handleZaw} className='border px-4 py-2 bg-black text-white'>ZAW</button>
        <button onClick={handleAUNG} className='border px-4 py-2 bg-black text-white'>AUNG</button>
        <button onClick={handleHTWE} className='border px-4 py-2 bg-black text-white'>HTWE</button>
        <button onClick={handleClear} className='border px-4 py-2 '>Clear Name</button>
    </div>
  )
}

export default ShowMyName