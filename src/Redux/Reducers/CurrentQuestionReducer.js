import * as actionTypes from '../Actions/actionTypes';
import { ReturnQuestionTurn } from '../../functions/handleData';



const initialState = {
    CurrentQuestion : null
}

export const CurrentQuestionReducer = (state = initialState , action) => {
   switch(action.type) {
       case(actionTypes.NEXT_QUESTION): 
       console.log(action.payload)
       
        let result = ReturnQuestionTurn(action.payload)
       return {
        CurrentQuestion : result
       }
       case(actionTypes.BACK_QUESTION): 
       return {
        CurrentQuestion : state.CurrentQuestion - 1
       }

       default: return state
   }
}