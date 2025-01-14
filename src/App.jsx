import React, { useState } from 'react'

const App = () => { 

  console.log(useState(0));
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    console.log("U click Increament");
    setCount(count + 1)
  }
  const handleDecrement = () => {
    console.log("U click Decreament");
    setCount(count - 1)
  }


  return (
    <div className='p-10'>

      <h1 className='text-9xl font-bold underline'>{count}</h1>
      <button onClick={handleDecrement} className='border px-4 py-2 bg-black text-white'>decrement</button>
      <button onClick={handleIncrement} className='border px-4 py-2 bg-black text-white'>increment</button>
    </div>
  )
}

export default App