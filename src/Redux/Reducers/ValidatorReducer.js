import * as actionTypes from '../Actions/actionTypes';
import { IsCurrentQuestionHaveAnswerd } from '../../functions/handleData';



const initialState = {
    Validate : {
        RequireValidate: true , 

    }
}

export const ValidatorReducer = (state = initialState , action) => {
   switch(action.type) {
       case(actionTypes.CHECK_FOR_REQUIRE_VALIDATE):
        let updateRequireValidate = IsCurrentQuestionHaveAnswerd(action.CurrentQuestion);
            return {
                Validate: {
                    ...state.Validate ,
                    RequireValidate: !updateRequireValidate
                }
            }

        case(actionTypes.SET_REQUIRE_VALIDATE): 
    
            return {
                Validate: {
                    ...state.Validate , 
                    RequireValidate: action.payload
                }
            }
            default: return state
       }
}