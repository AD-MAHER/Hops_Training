import React from "react";
import LeftSider from "./CenterPart/LeftSider";
import CenterContent from "./CenterPart/CenterContent";

export default function ArticlePart(props) {
  
  return (

    <div className="centerContent">
      <LeftSider leftSider_name={props.leftSider_name}  />
      <CenterContent centerContent_name={props.centerContent_name} />
    </div>
  );
}


