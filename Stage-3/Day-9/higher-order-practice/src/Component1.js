import React, { Component } from "react";
import {MyContext} from "./App"
 import HigherOrderComponent from "./HigherOrderComponent";
export class Component1 extends Component {
  

  render() {
    
    return (
      <div>
         
          <div className="bg-warning text-danger">
          by props :<MyContext.Consumer>{data=><h1>{data}</h1>}</MyContext.Consumer>
          </div>
          
          
        <h2 onMouseOver={this.props.FunctionAsProps}>
        {this.props.software}1 has
          <strong className="display-4 text-primary">
            {this.props.hocCount}
          </strong>
          times MouseOvered on Component1
        </h2>
      
      </div>
    );
  }
}

export default HigherOrderComponent(Component1,10);
