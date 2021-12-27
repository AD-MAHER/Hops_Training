import { INCREAMENT , DECREAMENT , RESET } from "./ActionType";

export const increamentCount =()=>{
return {
    type:INCREAMENT
}
}


export const decreamentCount =()=>{
    return {
        type:DECREAMENT
    }
 }


 export const resetCount =()=>{
    return {
        type:RESET
    }
}
    
