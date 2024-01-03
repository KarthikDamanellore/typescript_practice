import React, { FC, useEffect, useState } from 'react'

interface Post{
    userId:number,
    id:number,
    body:string,
    title:string,
}

const ApiCall:FC = () => {

    const[posts, setPosts]=useState<Post[]>([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then(response=>response.json().then(data=>setPosts
        (data)))
    },[])
    console.log(posts)
  return (
    <div>
       {
        posts && posts.map((item,index)=>{return(
            <div key={index}>
                <h1>{item.title}</h1>
                <p>{item.id}</p>
                <p>{item.body}</p>
            </div>
        )})
       }
    </div>
  )
}

export default ApiCall