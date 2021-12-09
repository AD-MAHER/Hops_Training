import React, { Component } from 'react'
import './App.css';


export default class App extends Component {
  constructor(props){
    super(props);
    
    this.state={
      count :  0
    }

  }

  changeValue =( values)=>{

        this.setState({
             count : this.state.count  + values
            }
        )
  
      
  }
  render() {
    return (
      <>
        <div style={{"display" : "flex", "flexDirection" : "column", "alignContent" : "center", "justifyContent" : "center", "width" : "10vw"}}>
          <h1>{this.state.count}</h1>
        <br/>
           <br/>
          <button onClick={()=>{
            this.changeValue(1)
          }}><h2>+Increase</h2></button>
          <br/>
           <br/>
          <button onClick={
            this.changeValue.bind("",-1)
          }><h3>- Decrease</h3></button>
        </div>
      </>
    )
  }
}

