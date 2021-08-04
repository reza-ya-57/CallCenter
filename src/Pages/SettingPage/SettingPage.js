import React from "react";
import {useSelector , useDispatch} from 'react-redux';
import * as actionTypes from '../../Redux/Actions/actionTypes';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const SettingPage = (props) => {
    const dispatch = useDispatch();

    const state = useSelector(state => state.theme)
    const ThemeHandler = (theme) => {
        if (theme === "theme001") {
            dispatch({type:actionTypes.SET_THEME , payload: "theme001"})
        } else if (theme === "theme002") {
            dispatch({type:actionTypes.SET_THEME , payload: "theme002"})
        } else if (theme === "theme003") {
            dispatch({type:actionTypes.SET_THEME , payload: "theme003"})
        } else if (theme === "theme004") {
            dispatch({type:actionTypes.SET_THEME , payload: "theme004"})
        }else if (theme === "theme005") {
            dispatch({type:actionTypes.SET_THEME , payload: "theme005"})
        }else if (theme === "theme006") {
            dispatch({type:actionTypes.SET_THEME , payload: "theme006"})
        }
    }

    return (
        <>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
            <Button  onClick={() => ThemeHandler("theme001")}>تم شماره 1</Button>
            <Button  onClick={() => ThemeHandler("theme002")}>تم شماره 2</Button>
            <Button  onClick={() => ThemeHandler("theme003")}>تم شماره 3</Button>
            <Button  onClick={() => ThemeHandler("theme004")}>تم شماره 4</Button>
            <Button  onClick={() => ThemeHandler("theme005")}>تم شماره 5</Button>
            <Button  onClick={() => ThemeHandler("theme006")}>تم شماره 6</Button>
            </ButtonGroup>
        </>
    )
}

export default SettingPage;