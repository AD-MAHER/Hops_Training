import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import {Provider} from "react-redux"
import {createStore, combineReducers,applyMiddleware} from "redux"
import reducerA from './Store/reducerA'
import reducerB from './Store/reducerB'

//import reducer from './Store/reducer'
// const store = createStore(reducer);


const logAction = store =>{
       return next =>{
         return action =>{
           const result = next(action);
           console.log("Middleware is Applied",JSON.stringify({result }));
           return result;
          }
       }
}
const rootReducer = combineReducers({
  rA : reducerA,
  rB : reducerB
})
const store = createStore(rootReducer , applyMiddleware(logAction));

console.log(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

    <App />
    </Provider>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
