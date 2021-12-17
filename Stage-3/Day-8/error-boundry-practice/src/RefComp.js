import React, { Component } from 'react'
import ChildRefComp from './ChildRefComp';

export default class RefComp extends Component {
    constructor(props){
        super(props);
        // this.textInput1 = React.createRef();
        this.textInput = React.createRef();

        

    }
    componentDidMount=()=>{
        // this.textInput1.current.value = "Ajay"
        this.textInput.current.focus()
        

    }
    render() {
        return (
            <>

            <ChildRefComp ref={this.textInput1} />
             <form>
               <label> Name:</label> <input type="text"/>
                <br/>
                <br/>
                <label> Password :</label> <input type="text"  />
                <br/>
                <br/>
                <label>Address :</label> <input type="text"   />
                

            </form> 
            </>
        )
    }
}
