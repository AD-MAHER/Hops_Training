import React, { useEffect } from 'react'

export default function AboutUs() {
    useEffect(() => {
        console.log(">>>About us is *mounted");
        return () => {
            console.log("~~~~~~~~~~~~~~~~~~~~~~About us is unmounted");
        }
    },[])
    return (
        <div>
            AboutUs Page
        </div>
    )
}
