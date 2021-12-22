import React, { useState, useContext } from "react";
import Switch from "react-switch";
import ThemeContext from "../ThemeContext";

export default function HeaderComp(props) {
  const themes = useContext(ThemeContext);

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    console.log(themes);
    if (checked === false) {
      setChecked(true);
      props.fun();
    } else {
      setChecked(false);
      props.fun();
    }
  };
  return (
    <div className=" text-center row" style={themes}>
      <div className="display-4 col-11 d-flex justify-content-center align-items-center">
        <p style={themes}>Table</p>
      </div>
      <div className="col-1 d-flex justify-content-end align-items-center ">
       
        <Switch onChange={handleChange} checked={checked} />
      </div>
    </div>
  );
}
