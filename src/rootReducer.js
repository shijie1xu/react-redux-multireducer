import {combineReducers} from "redux";
import reducerA from "./reducerA";
import reducerB from "./recucerB";

const rootReducer = combineReducers({
    rA:reducerA,
    rB:reducerB
});

export default rootReducer;
