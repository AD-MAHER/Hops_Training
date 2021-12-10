import React,{Component} from 'react';

export default class ChildComponent extends Component {
    constructor (props){
      super(props);
      this.state ={
                
      }
     
    }
    
      render() {
      
        return (
          
              <>

            
    <button onClick={()=>{
        this.props.callFunction( "Hops")
    }}>Call Function</button>
    {/* <input type='text'/>
          */}
    
            </>
          
        )
      }
    }
    