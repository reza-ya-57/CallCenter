import React , { useState } from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import { useSelector , useDispatch } from 'react-redux';
import * as actionTypes from '../../../Redux/Actions/actionTypes';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';
import NoIdeaCheckbox from '../../../Partial/NoIdeaCheckbox/NoIdeaCheckbox';
import clsx from 'clsx'
import "./MultiLineInput.css"

const useStyles = makeStyles(theme => ({
    NoIdeaCheckbox: {
        marginBottom: "10px" , 
        marginLeft: "0px"
    }


}))


const MultiLineInput = (props) => {
    const dispatch = useDispatch();
    let {CurrentQuestion} = useSelector(state => state.currentqa);
    const classes = useStyles();
    const [Input, setInput] = useState('')
    const [Error,setError ] = useState(false)

    const InputHanlder = (e) => {
        setInput(e.target.value)
        setError(true)
        let updateCurrentQuestion = JSON.parse(JSON.stringify(CurrentQuestion));
        updateCurrentQuestion.choices.description = e.target.value;
        dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: updateCurrentQuestion })
        dispatch({type: actionTypes.CHECK_FOR_REQUIRE_VALIDATE , CurrentQuestion: updateCurrentQuestion })
        if (e.target.value.length > CurrentQuestion.choices.min) {
            dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: true })
        }else {
            setError(false)
            dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: false })
        }

    }


    const checkboxChangeHandler = () => {
    let updateState = JSON.parse(JSON.stringify(CurrentQuestion));
    updateState.choices.description = "";
    updateState.noidea.status = !updateState.noidea.status
    dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: updateState });
    dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: updateState.noidea.status })
    }


    return (
        <div className={classes.Root}>
           <QuestionTemplate number={CurrentQuestion.number} text={CurrentQuestion.caption}>
                <NoIdeaCheckbox
                    className={clsx({
                        [classes.NoIdeaStatus]: !CurrentQuestion.noidea , 
                        [classes.NoIdeaCheckbox]: true
                    })}
                            checked={CurrentQuestion.noidea.status}
                            onChange={checkboxChangeHandler}
                            />
                <div>
                    <TextField
                        id="hello"
                        disabled={CurrentQuestion.noidea.status}
                        value={CurrentQuestion.choices.description}
                        multiline={true}
                        maxRows={2}
                        className={classes.TextField}
                        error={Error}
                        // value={Input}
                        onChange={InputHanlder}
                        onInput={(e) => {
                            e.target.value = e.target.value.toString().slice(0, CurrentQuestion.choices.max)
                        }}
                        placeholder="توضیحات"
                        variant="outlined" 
                        autoFocus 
                        helperText="kdjflsdk"
                        error={!Error}
                        />
                </div>
           </QuestionTemplate>
        </div>
    )
}

export default MultiLineInput;