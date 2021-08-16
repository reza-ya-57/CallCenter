import * as actionTypes from '../Actions/actionTypes';

const initialState = {
    user: "Reza"
}

export const authReducer = (state = initialState , action) => {
    switch(action.type) {
        case(actionTypes.SET_USER): 
        return {
            ...state ,
            user: action.payload
        }

        default: return state
    }
}