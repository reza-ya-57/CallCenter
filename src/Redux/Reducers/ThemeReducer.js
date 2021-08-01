import * as actionTypes from '../Actions/actionTypes';
import {theme001} from '../../Theme/CustomTheme/Theme001';
import {theme002} from '../../Theme/CustomTheme/Theme002';
import {theme003} from '../../Theme/CustomTheme/Theme003';
import {theme004} from '../../Theme/CustomTheme/Theme004';

const initialState = { 
    customTheme : {
        ...theme001
    }
}

const themeReducer = (state = initialState , action) => {
    switch (action.type) {
        case (actionTypes.SET_THEME): 
        if (action.payload == "theme001") {
            return {
                customTheme: {
                    ...theme001
                }
            }
        } else if (action.payload == "theme002")  {
            return  {
                customTheme: {
                    ...theme002
                }
            }   
        } else if (action.payload == "theme003")  {
            return  {
                customTheme: {
                    ...theme003
                }
            }   
        } else if (action.payload == "theme004")  {
            return  {
                customTheme: {
                    ...theme004
                }
            }   
        }
        default: return state
    }

}

export default themeReducer;