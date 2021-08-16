import * as actionTypes from '../Actions/actionTypes';

const initialState = {
    CurrentQuestion : 1
}

export const CurrentQuestionReducer = (state = initialState , action) => {
   switch(action.type) {
       case(actionTypes.NEXT_QUESTION): 
       return {
        CurrentQuestion : state.CurrentQuestion + 1
       }
       case(actionTypes.BACK_QUESTION): 
       return {
        CurrentQuestion : state.CurrentQuestion - 1
       }

       default: return state
   }
}