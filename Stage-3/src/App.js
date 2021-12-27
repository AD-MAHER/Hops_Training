import React, { Component } from 'react'
import './App.css';
import Counter from './Component/Counter';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Counter/>
      </div>
    )
  }
}



export default connect((state)=>{
  return {
    ui:state.ui
  }
}) (App);
