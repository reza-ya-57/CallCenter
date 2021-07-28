

const initialState = {
    user: "Reza"
}

export const authReducer = (state = initialState , action) => {
    switch(action.type) {
        case("SET_USER"): 
        return {
            ...state ,
            user: action.payload
        }

        default: return state
    }
}