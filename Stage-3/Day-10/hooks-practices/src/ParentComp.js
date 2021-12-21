import React, {useState , useEffect} from 'react'

export const ParentComp = () => {
    let [count , setCount] = useState(0)
    let [dcount , setDcount] = useState(0)


    useEffect(()=>{
        console.log("UseEffect is Called and component is mounted");
        return ()=> ( 
            console.log("<<<<<<<<<<---unmounting--->>>>>>>>>>>")
             )
    },[]    )
   
  return (
        <>
           <button onClick={()=> setCount ( count + 1)}>Increase</button>
           <br/>
           <span>Increament = {count}</span> 
           <br/>
           <br/>
           <br/>

           <button onClick={()=> setDcount ( dcount - 1)}>decrease</button>

           <br/>
           

           <span>Decreamnet = {dcount}</span> 

        </>
    )
}


