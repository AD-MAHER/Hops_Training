import React, { Component } from 'react'

const HigherOrderComponent = (Comp , val) => {
    class CountIncerease extends Component {
        state = {
            count : 0
        }
    
        handleCounts=()=>{
            this.setState({count:this.state.count + val})
        }
        render()
    
        {
          
            return <Comp FunctionAsProps={this.handleCounts} hocCount={this.state.count}   name={ this.props.compProps} software={this.props.company}/>
        }
    }
    return CountIncerease;
}

export default HigherOrderComponent;
