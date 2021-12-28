import React, { Component } from "react";
import { connect } from "react-redux";


class CounterComp extends Component {
  render() {
  
    return (
      <>
       

        <div style={{"display": "flex" , "alignContent":"center"}}>
          <h1>Age <strong>:</strong>&nbsp;&nbsp; </h1>
          <h1>{this.props.age}</h1>
        </div>

        <button className="up_btn" onClick={this.props.onAgeUp}>
          <h1 className="up_txt"> Age&nbsp;&nbsp; + &nbsp;&nbsp;</h1>
        </button>

        <button className="down_btn" onClick={this.props.onAgeDown}>
          <h1 className="down_txt">Age&nbsp;&nbsp; - &nbsp;&nbsp; </h1>
        </button>

        <button className="reset_btn" onClick={this.props.onReset}>
          <h1 className="reset_txt">&nbsp;&nbsp; Reset &nbsp;&nbsp;</h1>
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  
  return {
    age: state.age,
  };
};
const mapDispachToProps = (dispach) => {
 
  return {
    onAgeUp: () =>{ dispach({ type: "AGE_UP" })},
    onAgeDown: () => {dispach({ type: "AGE_DOWN" })},
    onReset: () =>{ dispach({ type: "RESET" })}
  };
};
export default connect( mapStateToProps,mapDispachToProps)(CounterComp);
