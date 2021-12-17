
import React, { Component } from "react";

 class Component2 extends Component {

  render() {
    return (
      <div>
        <h2 onClick={this.props.FunctionAsProps}>
        {this.props.software}2 has
          <strong className="display-4 text-primary">
            {this.props.hocCount}
          </strong>
                    times MouseOvered on Component2
        </h2>

        <h1>
          by props : {this.props.name}
          </h1>
      </div>
    );
  }
}

export default Component2;




















// import React, { Component } from "react";
// import HigherOrderComponent from "./HigherOrderComponent";

// export class Component2 extends Component {
//   render() {
//     return (
//         <>
//       <div>
//         <h2 onMouseOver={this.props.FunctionAsProps}>
//           <strong className="display-4 text-danger">
//             {this.props.hocCount}
//           </strong>
//           times Clicked on Component2
//         </h2>
//       </div>

// <div>
// <h2 onMouseOver={this.props.FunctionAsProps}>
//   Component1 has
//   <strong className="display-4 text-primary">
//     {this.props.hocCount}
//   </strong>
//   times MouseOvered on Component1
// </h2>
// </div>
// </>
//     );
//   }
// }

// export default HigherOrderComponent(Component2);
