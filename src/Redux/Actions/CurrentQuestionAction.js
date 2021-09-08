
import * as actionTypes from "./actionTypes";


export const submitAnswer = (questionobject) => {
    return {
        type: actionTypes.SUBMIT_ANSWER , 
        payload: questionobject
    }
}
// export const submitAnswer = (questionobject) => {
//     return {
//         type: actionTypes.SUBMIT_ANSWER , 
//         payload: questionobject
//     }
// }

