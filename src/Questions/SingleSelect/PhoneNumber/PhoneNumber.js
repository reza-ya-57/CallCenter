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
        maxWidth: MaxWidth
    } ,
    NoIdeaStatus: {
        display: "none"
    }
}))


const PhoneNumber = (props) => {
    let dispatch = useDispatch();
    const store = useStore();
    let {CurrentQuestion} = useSelector(state => state.currentqa);
    const classes = useStyles();
    const [InputValue, setInputValue] = useState('')
    const [Error, setError] = useState(false)
    const [Checked, setChecked] = useState(false)


    const InputHanlder = (e) => {
        let validate = false;
        setInputValue(e.target.value)
        if (e.target.value.toString().length < 11) {
            setError(true)
            validate = false;
        } else if (e.target.value.toString()[0] + e.target.value.toString()[1] !== "09") {
            setError(true)
            validate = false;
        } else {
            validate = true;
            setError(false)
        }
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
                            value={CurrentQuestion.choices.description}
                            disabled={CurrentQuestion.noidea.status}
                            className={classes.TextField}
                            error={Error}
                            onChange={InputHanlder}
                            type='tel'
                            onInput={(e) => {
                                e.target.value = e.target.value.toString().slice(0,11)
                                
                            }}
                            placeholder="شماره تلفن همراه"
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

export default PhoneNumber;