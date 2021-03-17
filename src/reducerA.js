const initialState={
    a:1
}

const reducerA=(state=initialState,action)=>{
    if(action.type === 'Update_a'){
        return{
            ...state,
            a:action.b+state.a
        }
    }
    return state;
}

export default reducerA;
