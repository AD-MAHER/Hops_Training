import React,{useRef} from 'react'

export default function UseRefComp() {
 const inputRef   = useRef(null)


 const clickedRef =()=>{
       console.log(inputRef.current.value)
 }
    return (
        <div>
            <input onChange={clickedRef} ref={inputRef}/>
            <button onClick={clickedRef}>useRef</button>
        </div>
    )
}
