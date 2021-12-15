import React, { Component } from 'react'

export default class ChildRefComp extends Component {
    constructor(props){
        super(props);
        this.textInput2 = React.forwardRef();

    }

    componentDidMount=()=>{
      
    }
    render() {
        return (
            <form>
               <label> Child Name:</label> <input type="text" ref={this.textInput2}/>
                <br/>
                <br/>
            
                

            </form>
        )
    }
}
