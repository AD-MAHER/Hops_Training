import React from 'react'
import { useSelector } from 'react-redux'

export default function Coin() {
   
    const count = useSelector((state) => state.counter.count)
    return (
        <div>
             <span><h1>coin : {count}</h1></span>
        </div>
    )
}
