import { combineReducers, createStore } from "redux";
import { productReducer } from "./reducer/Reducer";


 const rootReducer = combineReducers({
    product: productReducer,
})


export type RootState = ReturnType <typeof rootReducer>

export const store =createStore (rootReducer)