

const initialState = {
    CurrentQuestion : 1
}

export const CurrentQuestionReducer = (state = initialState , action) => {
   switch(action.type) {
       case("NEXT_QUESTION"): 
       return {
        CurrentQuestion : state.CurrentQuestion + 1
       }
       case("BACK_QUESTION"): 
       return {
        CurrentQuestion : state.CurrentQuestion - 1
       }

       default: return state
   }
}