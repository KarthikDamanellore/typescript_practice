import React, { FC, useState } from 'react'

interface CounterProps{
    initialValue: number
}

const Counter:FC<CounterProps> = ({initialValue}) => {
    const[count, setCount]=useState<number>(initialValue)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>change the count value</button>
    </div>
  )
}

export default Counter