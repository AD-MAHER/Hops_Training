const initialState = {
    age : 0,
history : []};


const reducer = (state = initialState,action)=>{
      const newState = {...state};
if(action.type === 'AGE_UP'){
    newState.age++;
}
else if(action.type === 'AGE_DOWN'){
    newState.age--;
}

else if(action.type === 'RESET'){
    newState.age = 0;
}
      return newState;
}

export default reducer;