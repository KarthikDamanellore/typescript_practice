import React, { FC, useState } from 'react'

const Toggle:FC = () => {
    const[toggled, setIsToggled]=useState<boolean>(false)
  return (
    <div>
        <button onClick={()=>setIsToggled(!toggled)}>
        {toggled ? 'on' : 'off'}
        </button>
    </div>
  )
}

export default Toggle