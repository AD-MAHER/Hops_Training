import React, { createContext, useEffect, useReducer , useState} from "react";
import AppReducer from "./AppReducer";

//Initial State


//Create Context

export const GlobalContext = createContext();

//PROVIDER COMPONENT

export const GlobalProvider = ({ children }) => {
const [InitialState, setInitialState] = useState({users:[]})

useEffect(() => {
    fetch("http://localhost:3006/contacts")
    .then((response) => response.json())
    .then((data) =>setInitialState({users:data}))
    
}, [])
console.log("ssssss",InitialState);
  const [state, dispatch] = useReducer(AppReducer, InitialState);
  //Actions
  const removeUser = (id) => {
    dispatch({
      type: "REMOVE_USER",
      payload: id,
    });
  };
  const addUser = (user) => {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  };
  const editUser = (user) => {
    dispatch({
      type: "EDIT_USER",
      payload: user,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        InitialState:InitialState,
        users: state.users,
        removeUser,
        addUser,
        editUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
