import React, { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        console.log(">>>HOME us is *mounted");
        return () => {
            console.log("~~~~~~~~~~~~~~~~~~~~~~HOME us is unmounted");
        }
    },[])
    return (
        <div>
            Home Page
        </div>
    )
}
