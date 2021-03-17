const initialState={
    b:1
}

const reducerB = (state=initialState, action)=>{
    if(action.type==='Update_b'){
        return{
            ...state,
            b:action.a+state.b
        }
    }
    return state;
}

export default reducerB;

