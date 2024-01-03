import React, { FC, useContext } from 'react'
import { useArrayObjectContext } from './ArrayObjectContext'
import styles from "./styles.module.css"


const ArrayOfObjectDataDisplay:FC = () => {
    const {arrayObjectValue}=useArrayObjectContext()
  return (
    <div>
        {
            arrayObjectValue.map((item, index)=>{
                return(
                    <div>
                        <p className={styles.textColor}>{item.key}</p>

                    </div>
                )
            })
        }
    </div>
  )
}

export default ArrayOfObjectDataDisplay