import { createContext, useReducer } from "react";
import {reducer,initialState} from './reducer'
export const context = createContext();

const StateProvider = ({children}) =>{
    return(
        <context.Provider value={useReducer(reducer,initialState)}>
            {children}
        </context.Provider>
    )
}

export default StateProvider;