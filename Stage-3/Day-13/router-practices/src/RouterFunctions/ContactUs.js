import React, { useEffect } from 'react'

export default function ContactUs() {
  useEffect(() => {
    console.log(">>>ContactUs us is *mounted");
 
      return () => {
        console.log("~~~~~~~~~~~~~~~~~~~~~~ContactUs us is unmounted");
    
    }
   
},[])
    return (
        <div>
          ContactUs Page  
        </div>
    )
}
