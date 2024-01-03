import React from 'react'

const Basics = () => {
    let myName:string='Karthik'
    let meaningOfLife:number;
    let isLoading:boolean;
    let album:any;

    let albumOne: string | number /*union data type*/

    meaningOfLife=42
    isLoading=true
    album=1999

    albumOne="my name"


    const sum=(a:number, b:string)=>{
        return a +b;
    }

    let postId:string | number
    let isActive : number | boolean

    let re:RegExp = /\w+/g
  return (
    <div>
        <p>{myName}</p>
        <p>{meaningOfLife}</p>
        <p>{isLoading}</p>
        <p>{album}</p>
    </div>
  )
}

export default Basics