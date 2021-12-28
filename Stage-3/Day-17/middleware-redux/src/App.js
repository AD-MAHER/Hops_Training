import React, { Component } from 'react'
import "./App.css"
import {connect} from "react-redux"
import CounterComp from './Components/CounterComp';

 class App extends Component {
  render() {
    return (
      <div className="App">
          {/* <CounterComp/> */}
          <div className='col'>
          <div style={{"display": "flex" , "alignContent":"center"}}>
          <h1>A&nbsp;&nbsp;<strong>:</strong>&nbsp;&nbsp; </h1>
          <h1>{this.props.a}</h1>
        </div>
          <button className="up_btn" onClick={()=> this.props.updateA(this.props.b)}>
          <h1 className="up_txt"> Update A</h1>
        </button>
          </div>
          <div className='col'>

          <div style={{"display": "flex" , "alignContent":"center"}}>
          <h1>B&nbsp;&nbsp;<strong>:</strong>&nbsp;&nbsp; </h1>
          <h1>{this.props.b}</h1>
        </div>
           
          <button className="up_btn"  onClick={()=> this.props.updateB(this.props.a)}> <h1 className="up_txt">Update B</h1></button>
          </div>

        
      </div>
    )
  }
}
const mapStoreToProps = (store)=>{
  return{
    a: store.rA.a,
    b: store.rB.b
  }
}

const mapDispachToProps = (dispach)=>{
  return{
    updateA : (b)=> dispach({type:'UPDATE_A',b:b}),
    updateB : (a)=> dispach({type:'UPDATE_B',a:a})

  }
}

export default connect(mapStoreToProps,mapDispachToProps)(App)
