import * as actionTypes from '../Actions/actionTypes';
import { ReturnQuestionTurn } from '../../functions/handleData';



const initialState = {
    CurrentQuestion : null
    // CurrentQuestion: {
    //     id: 12
    // }
}

export const CurrentQuestionReducer = (state = initialState , action) => {
   switch(action.type) {
       case(actionTypes.NEXT_QUESTION): 
        let result = ReturnQuestionTurn(action.payload)
        let newresult = JSON.parse(JSON.stringify(result))
       return {
        CurrentQuestion : {
            ...newresult
        }
        // CurrentQuestion: {
        //     ...state.CurrentQuestion , 
        //     id: state.CurrentQuestion.id + 1
        // }
       }

       case(actionTypes.BACK_QUESTION): 
       return {
        CurrentQuestion : state.CurrentQuestion - 1
       }

       case(actionTypes.UPDATE_CURRENT_QUESTION):
       return {
        CurrentQuestion: action.payload
       }

       default: return state
   }
}