import React from 'react'


export const themes ={
    dark : {
        color : "white",
        background : "black",
        variant : "dark"
    },
    light : {
        color : "black",
        background : "#F2F2F2",
        variant : "light"
    }
}


 const ThemeContext = React.createContext(themes )
 

  
 export default ThemeContext 

