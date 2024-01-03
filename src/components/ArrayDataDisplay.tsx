import React from 'react'
import { useArrayContext } from './Hello/ArrayContext'

const ArrayDataDisplay = () => {

    const {arrayValue} =useArrayContext();
  return (
    <div>
        <h2>Array values:</h2>
        {
            arrayValue.map((item,index)=>{
                return(

                    <li>{item}</li>
                )
            })
        }
    </div>
  )
}

export default ArrayDataDisplay