import React, { FC, useState } from 'react'

const EventExample:FC = () => {
    const[text,setText]=useState<string>('')

    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setText(event.target.value)
    }
  return (
    <div>
        <h1>EventExample</h1>
        <input type="text" value={text} onChange={handleChange}/>
        <p>you typed:{text}</p>
    </div>
  )
}

export default EventExample