import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./Components/Home";
import { AddUser } from "./Components/AddUser";
import {EditUser}  from "./Components/EditUser";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./Context/GlobalState";
function App() {
  return (
  

      <BrowserRouter>
      <GlobalProvider>
      <div style={{"maxWidth":"30rem" , "margin":"4rem auto" }}>
       <Routes>
        <Route  path="/"
        element={<Home />}/>

        <Route path="/adduser"
        element={ <AddUser/> }/>

        <Route path="/edit/:id"
        element={ <EditUser />}/>
       
        </Routes>
       </div>
      </GlobalProvider>
      </BrowserRouter>
 
  );
}

export default App;
