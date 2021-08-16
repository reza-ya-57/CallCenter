

const initialState = {
    reRender: "hello"
}

export const apexReducer = (state = initialState , action) => {
    switch(action.type) {
        case("rerender"): 
        return {
            reRender: "goodby"
        }

        default: return state
    }
}

export default apexReducer;
