import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { increamentCount ,decreamentCount , resetCount  } from '../Redux/Action/CounterAction'
            

function Counter(props) {

    useEffect(() => {
        console.log("FUN MOUNTED");
        return () => {
          console.log("FUN UN-MOUNTED");
        }
    }, [props.counter])
    
        return (
          
            <>
                     
            <button onClick={props.decreament}><h1>&nbsp;&nbsp; - &nbsp;&nbsp;  </h1></button>
            
            <span ><h1>{props.counter}</h1></span>
            
            <button style={{"display": "none"}} onClick={props.increament}><h1>&nbsp;&nbsp;  + &nbsp;&nbsp;</h1></button>

            <button style={{"display": "none"}} onClick={props.reset}><h1>&nbsp;&nbsp; Reset &nbsp;&nbsp;</h1></button>
            </>
          
        )
    
}


const mapStateToProps = state =>{
    return{
        counter : state.counter
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        increament: ()=>{dispatch(increamentCount())},
        decreament: ()=>{dispatch(decreamentCount())},
        reset: ()=>{dispatch(resetCount())},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)




