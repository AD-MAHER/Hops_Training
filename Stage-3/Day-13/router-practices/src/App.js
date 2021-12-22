
import './App.css';
import HeaderComp from './HeaderComp';
import Home from "./RouterFunctions/Home";
import ContactUs from "./RouterFunctions/ContactUs";
import AboutUs from "./RouterFunctions/AboutUs";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
   

<BrowserRouter>
<HeaderComp/>
<Routes>
     
        <Route  path="/"
        element={<Home />}/>

        <Route path="/contact"
        element={ <ContactUs  />}/>

        <Route path="/about"
        element={ <AboutUs />}/>
        </Routes>
    </BrowserRouter>


  );
}

export default App;
