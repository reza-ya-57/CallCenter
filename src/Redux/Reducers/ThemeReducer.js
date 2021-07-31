import * as actionTypes from '../Actions/actionTypes';
import {theme001} from '../../Theme/CustomTheme/Theme001'
import {theme002} from '../../Theme/CustomTheme/Theme002'

const initialState = { 
    customTheme : {
        primary: "red" , 
        secondary: "pink" ,
        third: "pink" , 
        four: "brown"
    }
}

const themeReducer = (state = initialState , action) => {
    switch (action.type) {
        case (actionTypes.SET_THEME): 
        if (action.payload == "theme001") {
            return {
                customTheme: {
                    primary: "red" , 
                    secondary: "pink" ,
                    third: "pink" , 
                    four: "brown"
                }
            }
        } else if (action.payload == "theme002")  {
            return {
                customTheme: {
                    primary: "orange" , 
                    secondary: "red" ,
                    third: "pink" , 
                    four: "brown"
                }
            }   
        }
        default: return state
    }

}

export default themeReducer;