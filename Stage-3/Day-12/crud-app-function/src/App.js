import React,{useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LayoutComp from './Layout/LayoutComp';
import ThemeContext, {themes}  from './ThemeContext';


function App() {
  
  const [getTheme , setGetTheme] = useState(themes.dark)
  const changeTheme =()=>{
   if (getTheme === themes.light) {
    setGetTheme(
      themes.dark
      )
   }
   else{
    setGetTheme(
      themes.light
      )
   }
  }
  
  return (
    <>
  
    <ThemeContext.Provider value={getTheme} >

    <LayoutComp funParent={changeTheme}/>
    </ThemeContext.Provider>
   
    </>
  );
}

export default App;
 
