import React,{createContext,useReducer} from 'react'
import AppReducer from "./AppReducer";


//Initial State
const InitialState ={
    users : [
        {id : "1" ,name : 'user One'},
        {id : "2" ,name : 'user Two'},
        {id : "3" ,name : 'user Three'},
        {id : "4" ,name : 'user Four'},

    ]
};
//Create Context

export const GlobalContext = createContext(InitialState);

//PROVIDER COMPONENT

export const GlobalProvider = ({children})=>{
    const [state , dispatch,] = useReducer(AppReducer, InitialState);
    //Actions
    const removeUser = (id)=>{
        dispatch({
            type:'REMOVE_USER',
            payload : id
        })
    }
    const addUser = (user)=>{
        dispatch({
            type:'ADD_USER',
            payload : user
        })
    }
    const editUser = (user)=>{
        dispatch({
            type:'EDIT_USER',
            payload : user
        })
    }
    return(
        <GlobalContext.Provider value={{
                users: state.users,
                removeUser,
                addUser,
                editUser
            }}>
            {children}
            </GlobalContext.Provider>

    )
}

