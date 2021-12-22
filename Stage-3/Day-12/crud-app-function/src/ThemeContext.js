import React from 'react'


export const themes ={
    dark : {
        color : "white",
        background : "black",
        variant : "dark",
        ModalVariant : "darkClass"
    },
    light : {
        color : "black",
        background : "#F2F2F2",
        variant : "light",
        ModalVariant :"lightClass"
    }
}


 const ThemeContext = React.createContext(themes )
 

  
 export default ThemeContext 

