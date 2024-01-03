import React, { FC, useEffect, useState } from 'react'

const Timer:FC = () => {
    const[seconds,setSeconds]=useState<number>(0)

    useEffect(()=>{
        const interval= setInterval(()=>{
            setSeconds(seconds+1)
        },1000)

        return()=>clearInterval(interval)
    },[seconds])
  return (
    <div>Timer:{seconds}</div>
  )
}

export default Timer