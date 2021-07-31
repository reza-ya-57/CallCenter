import React from "react";
import {useSelector , useDispatch} from 'react-redux';
import * as actionTypes from '../../../Redux/Actions/actionTypes';



const SettingPage = (props) => {
    const dispatch = useDispatch();

    const state = useSelector(state => state.theme)
    const ThemeHandler = (theme) => {
        if (theme == "theme001") {
            console.log("change to theme001")
            dispatch({type:actionTypes.SET_THEME , payload: "theme001"})
        } else if (theme == "theme002") {
            console.log("change to theme002")
            dispatch({type:actionTypes.SET_THEME , payload: "theme002"})
        } else if (theme == "theme003") {
            console.log("change to theme003")
            dispatch({type:actionTypes.SET_THEME , payload: "theme003"})
        }
    }

    return (
        <>
            <div>This is a Setting Page!</div>
            <br />
            <br />
            <button onClick={() => ThemeHandler("theme001")}>Theme001</button>
            <button onClick={() => ThemeHandler("theme002")}>Theme002</button>
            <button onClick={() => ThemeHandler("theme003")}>Theme003</button>
        </>
    )
}

export default SettingPage;