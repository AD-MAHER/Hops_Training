import React, { Component } from 'react'
import "./App.css"
import CounterComp from './Components/CounterComp';

export default class App extends Component {
  render() {
    return (
      <div>
          {/* <CounterComp/> */}
          <div className='col'>
            <div><span>A:</span><span>{this.props.a}</span></div>
          <button>Update A</button>
          </div>
          <div className='col'>
            <div><span>B:</span><span>{this.props.b}</span></div>
          <button>Update B</button>
          </div>
      </div>
    )
  }
}
