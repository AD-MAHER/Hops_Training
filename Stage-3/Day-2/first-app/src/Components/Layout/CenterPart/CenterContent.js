import React, {Component} from "react";
import ChildComponent from "./ChildComponent";


export default class CenterContent extends Component {
constructor (props){
  super(props);
  this.state ={
         name:"Ajay" ,  
  }
 
}

 parentToChild =(lName)=>{
 let x = lName

if(x === "Hops"){
  this.setState({
    name: x  
   })
}
else{

  this.setState({
    name: "Its Not Allowed"  
   }
  ) 
}


}
  render() {
  
    return (
      
          <article>
          {/* {this.props.centerContent_name}   */}

       <div><h1>{this.state.name}</h1></div>
     <ChildComponent callFunction={this.parentToChild}/>

     <br/>
     <br/>
     <br/>
     <br/>
     {
       ()=>{
         console.log("Function Called Inner Jsx")
       }
     }

        </article>
      
    )
  }
}

