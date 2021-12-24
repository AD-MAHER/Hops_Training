import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import {increment,decrement} from './Redux/Reducers/CounterSlice';



export default function Counter() {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    

        return (
      <>
         
        <button onClick={()=>{dispatch(decrement())}}><h1>&nbsp;&nbsp; - &nbsp;&nbsp;  </h1></button>
      
        <span><h1>{count}</h1></span>
      
        <button onClick={()=>{dispatch(increment())}}><h1>&nbsp;&nbsp;  + &nbsp;&nbsp;</h1></button>
        </>
        );
    
}
