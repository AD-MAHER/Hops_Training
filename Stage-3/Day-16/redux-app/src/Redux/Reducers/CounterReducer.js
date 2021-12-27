import { INCREAMENT , DECREAMENT , RESET } from "../Action/ActionType";

const initial ={counter : 0}

const CounterReducer = (state = initial , action)=>{


    switch(action.type){
      case INCREAMENT : 
      return {counter : state.counter + 1}
      case DECREAMENT : 
      return {counter : state.counter - 1}
      case RESET : 
      return {counter : 0}
      default:
          return state;
    }
}

export default CounterReducer;