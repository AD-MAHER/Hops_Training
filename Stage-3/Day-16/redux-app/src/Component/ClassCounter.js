import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increamentCount ,decreamentCount , resetCount  } from '../Redux/Action/CounterAction'




class ClassCounter extends Component {


   
    render() {
        return (
          
            <>
                     
            <button  style={{"display": "none"}} onClick={this.props.decreament}><h1>&nbsp;&nbsp; - &nbsp;&nbsp;  </h1></button>
            
            <span  style={{"display": "none"}}  ><h1>{this.props.counter}</h1></span>
            
            <button onClick={this.props.increament}><h1>&nbsp;&nbsp;  + &nbsp;&nbsp;</h1></button>

            <button  onClick={this.props.reset}><h1>&nbsp;&nbsp; Reset &nbsp;&nbsp;</h1></button>
            </>
          
        )
    }
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

export default connect(mapStateToProps,mapDispatchToProps)(ClassCounter)