import React from "react";
import {  Link } from "react-router-dom";


export default function HeaderComp() {
  return (
    <>
      <div
        style={{
          height: "10vh",
          background: "black",
          color: "white",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
   

        
            <h3>
              <Link to="">Home</Link>
            </h3>
            <h3>
              <Link to="/about">About</Link>
              </h3>
            <h3>
              <Link to="/contact">Contact</Link>
              </h3>
        
      </div>
      
    </>
  );
}
