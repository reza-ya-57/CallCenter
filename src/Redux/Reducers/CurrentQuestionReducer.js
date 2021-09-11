import * as actionTypes from '../Actions/actionTypes';
import { ReturnQuestionTurn } from '../../functions/handleData';
import { OneStepBackFromCurrentQuestion } from '../../functions/handleData';



const initialState = {
    CurrentQuestion : null , 
    CurrentQuestionChange: true , 
}

export const CurrentQuestionReducer = (state = initialState , action) => {
   switch(action.type) {
       case(actionTypes.NEXT_QUESTION):
        let result = ReturnQuestionTurn(action.payload)
        let newresult = JSON.parse(JSON.stringify(result))
       return {
        CurrentQuestion : {
            ...newresult
        } , 
        CurrentQuestionChange: false , 
       }

       case(actionTypes.BACK_QUESTION):
       console.log(state.CurrentQuestion)
       console.log(action.Data)
       var updateCurrentQuestion = OneStepBackFromCurrentQuestion(state.CurrentQuestion , action.Data);
       console.log(updateCurrentQuestion)
       return {
        CurrentQuestion : {
            ...updateCurrentQuestion
        } ,
        CurrentQuestionChange: false , 
       }

       case(actionTypes.UPDATE_CURRENT_QUESTION):
       return {
        CurrentQuestion: {...action.payload} , 
        CurrentQuestionChange: true , 
       }

       case(actionTypes.SET_CHANGE_CURRENT_QUESTION): {
           return {
               CurrentQuestion: {...state.CurrentQuestion} ,
               CurrentQuestionChange: action.payload , 
           }
       }

       default: return state
   }
}