import React,{useState,useEffect} from 'react'

export default function HookCounter() {

    const [count , setCount] = useState(0)

    const increamentFunction =(n)=>{
         setCount ( count + n)
    }
    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])
    return (
        <>

        <div><h1>{count}</h1></div>


<button onClick={ ()=>increamentFunction(1)}>INCREASE</button>
<button onClick={ ()=>increamentFunction(-1)}>DECRESE</button>


        </>
    )
}
