import * as actionTypes from '../Actions/actionTypes';
import { ReturnQuestionTurn } from '../../functions/handleData';
import { OneStepBackFromCurrentQuestion } from '../../functions/handleData';



const initialState = {
    CurrentQuestion : null
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
       }

       case(actionTypes.BACK_QUESTION):
       var updateCurrentQuestion = OneStepBackFromCurrentQuestion(state.CurrentQuestion , action.Data);
       return {
        CurrentQuestion : {
            ...updateCurrentQuestion
        }
       }

       case(actionTypes.UPDATE_CURRENT_QUESTION):
       return {
        CurrentQuestion: action.payload
       }

       default: return state
   }
}