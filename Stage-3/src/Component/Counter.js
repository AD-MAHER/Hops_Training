import React,{useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    return (
        <>
         
        <button onClick={()=>{setCount(count - 1)}}><h1>&nbsp;&nbsp; - &nbsp;&nbsp;  </h1></button>
      
        <span><h1>{count}</h1></span>
      
        <button onClick={()=>{setCount(count + 1)}}><h1>&nbsp;&nbsp;  + &nbsp;&nbsp;</h1></button>
        </>
    )
}
