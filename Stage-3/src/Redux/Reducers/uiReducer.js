import actionType from "../Action/actionType";
import {formJS} from "imutable";

function initialState (){
    return fromJS (
        {
          showCamera : false,
          lang: 'en',
          profilePhoto : requestAnimationFrame('../../Images/HelloWorld.svg')
        }
    );
}
export const reducer = (state = initialState(),action)=>{
  if (typeof reducer.prototype[action.type] === "funcction") {
      return reducer.prototype[action.type](state,action)   
  }
  else {
      return state;
  }
}

reducer.prototype[actionType.ui.showCamera] = (state , action)=>{
    return state.set('showCamera', action.payload);
}

reducer.prototype[actionType.ui.setLanguages] = (state , action)=>{
    return state.set('lang', action.payload);
}


reducer.prototype[actionType.ui.setProfilePhoto] = (state , action)=>{
    return state.set('profilePhoto', action.payload);
}


// switch(action.type){
//     case actionType.ui.showCamera:
//         break;

//     case actionType.ui.setLanguage:
//         break;    
// }