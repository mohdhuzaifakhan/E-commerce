
import { ChangeData } from "./ChangeData";
import { combineReducers } from "redux";
import { orderReducer } from "./OrderReducer";
import { UserLogin } from "./UserLogin";
const rootReducers = combineReducers({
    ChangeData ,
    orderReducer,
    UserLogin
})

export default rootReducers;