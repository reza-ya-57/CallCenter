import React , { useState } from 'react';
import { useStore } from 'react-redux';
import { useSelector , useDispatch } from 'react-redux';
import * as actionTypes from '../../../Redux/Actions/actionTypes';
import { makeStyles, TextField } from '@material-ui/core';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';
import NoIdeaCheckbox from '../../../Partial/NoIdeaCheckbox/NoIdeaCheckbox';
import clsx from 'clsx';


const MaxWidth = 400
const useStyles = makeStyles(theme => ({
    Root: {
        display: "flex" , 
        justifyContent: "center" , 
        alignItems: "center" , 
        marginRight: "30px" ,
} ,
    TextField: {
        padding: "20px" , 
        maxWidth: MaxWidth , 
    }  ,

    NoIdeaStatus: {
        display: "none" ,
    }
}))


const SimpleNumberInput = (props) => {
    let dispatch = useDispatch();
    const store = useStore();
    // let {CurrentQuestion} = useSelector(state => state.currentqa);
    let CurrentQuestion = {...props} 
    const classes = useStyles();
    const [InputValue, setInputValue] = useState('')
    const [Error, setError] = useState(false)
    const [Checked, setChecked] = useState(false)
    let helperTextForTextField;
    if (CurrentQuestion.choices.min && CurrentQuestion.choices.max) {
        helperTextForTextField =  " تعداد کاراکتر بین " + `${CurrentQuestion.choices.min}` + " تا " + `${CurrentQuestion.choices.max}`
    }

    const InputHanlder = (e) => {
        setInputValue(e.target.value)
        let validate = true;
        if (props.decimal) {
            if (hasDecimal(e.target.value)) {
                setError(true)
                validate = false
            } else if (e.target.value.toString().length >= CurrentQuestion.choices.max) {
                setError(true)
                validate = false
            } else {
                setError (false)
                validate = false
            }
        } else {
            if (e.target.value.toString().length <= CurrentQuestion.choices.min) {
                setError(true)
                validate = false
            } 
            else {
                setError(false)
                // validate = true
            }
        }
        
        setInputValue(e.target.value)
        let updateCurrentQuestion = JSON.parse(JSON.stringify(CurrentQuestion));
        updateCurrentQuestion.choices.description = e.target.value;
        dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: updateCurrentQuestion })
        dispatch({type: actionTypes.CHECK_FOR_REQUIRE_VALIDATE , CurrentQuestion: updateCurrentQuestion })
        dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: validate })


    }

    const checkboxChangeHandler = () => {
        setChecked(prev => !prev)
        let updateState = JSON.parse(JSON.stringify(CurrentQuestion));
        updateState.choices.description = "";
        updateState.noidea.status = !updateState.noidea.status
        dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: updateState });
        let {Validate} = store.getState().validate
        dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: updateState.noidea.status })
    }

    return (
           <QuestionTemplate number={CurrentQuestion.number} text={CurrentQuestion.caption}>
            <div className={classes.Root}>
            <TextField
                helperText={helperTextForTextField}
                value={CurrentQuestion.choices.description}
                disabled={CurrentQuestion.noidea.status}
                onBlur={() => {
                    setError(false)
                }}
                className={classes.TextField}
                error={Error}
                onChange={InputHanlder}
                type='number'
                onInput={(e) => {
                    e.target.value = e.target.value.toString().slice(0,CurrentQuestion.choices.max)
                    
                }}
                placeholder="شماره"
                variant="outlined" 
                autoFocus  />
            <NoIdeaCheckbox
                className={clsx({
                    [classes.NoIdeaStatus]: !CurrentQuestion.noidea , 
                    [classes.NoIdeaCheckbox]: true
                })}
                checked={CurrentQuestion.noidea.status}
                onChange={checkboxChangeHandler}
                />
            </div>
           </QuestionTemplate>
    )
}

export default SimpleNumberInput;



function hasDecimal (num) {
    return !!(num % 1);
}