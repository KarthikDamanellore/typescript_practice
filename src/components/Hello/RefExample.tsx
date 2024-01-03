import React, { FC, useRef } from 'react'

const RefExample:FC = () => {
    const inputRef= useRef<HTMLInputElement | null>(null)

    const focusInput=()=>{
        if(inputRef.current)
        {
            inputRef.current.focus()
        }
    }
  return (
    <div>
        <input ref={inputRef} type='text'/>
        <button onClick={focusInput}>FocusInput</button>
    </div>
  )
}

export default RefExample