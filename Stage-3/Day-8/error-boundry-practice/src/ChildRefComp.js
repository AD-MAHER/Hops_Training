import React, { Component } from 'react'

export default class ChildRefComp extends Component {
    constructor(props){
        super(props);
        // this.textInput2 = React.forwardRef();
        // this.textInput = 

    }

    componentDidMount=()=>{
      
    }
    render() {
        return (
            <form>
               <label> Child Name:</label> <input type="text" ref={this.props.ref}/>
                <br/>
                <br/>
            
                

            </form>
        )
    }
}
