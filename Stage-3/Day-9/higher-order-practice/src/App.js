import React, { Component } from "react";
import Component1 from './Component1';
import './App.css';
import  Component2  from './Component2';
import 'bootstrap/dist/css/bootstrap.css';
import HigherOrderComponent from './HigherOrderComponent';


let CompHoc =  HigherOrderComponent(Component2 , 100)

const MyContext = React.createContext();

export default class App extends Component {
  state = {
    hops : "Healthcare",
    theme : "white-theme",
    name : "Ajay"
  }




  
    changeThemeFunction=()=>{
      if(this.state.theme === "white-theme"){
        this.setState({theme:"black-theme"})
        console.log(MyContext);
      }
      else{
        this.setState({theme:"white-theme"})
      }
        }
  
  render() {
    
    return (
      <>
      <button onClick={this.changeThemeFunction}>change theme</button>
      <div className={this.state.theme}>
        <MyContext.Provider value={this.state.name}>
      <Component1    company={this.state.hops}/>
      </MyContext.Provider>
      <CompHoc compProps="2222" company={this.state.hops} />
      </div>
      </>
    )
  }
}

export {MyContext}