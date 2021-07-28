import * as actionTypes from "./actionTypes";


export const setUser = (Name) => {
    return {
        type: actionTypes.SET_USER , 
        payload: Name
    }
}