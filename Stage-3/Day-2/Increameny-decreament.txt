import React, {Component} from "react";


export default class CenterContent extends Component {
constructor (props){
  super(props);
  this.state ={
    count:0
  }
 
}

  render() {
  
    return (
      
          <article>
          {/* {this.props.centerContent_name}   */}


          <button onClick={()=>{
          
              this.setState({
                count: this.state.count  + 1
              },);
          

          }}>+  Increase</button>

          <br/>

          <button onClick={()=>{
            
              this.setState({
                count: this.state.count - 1
              });
            
          }}>- Decrease</button>


          <br/>
          <br/>
 <h4>{this.state.count}</h4>


        </article>
      
    )
  }
}

