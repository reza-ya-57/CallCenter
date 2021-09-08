import React , { useState } from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';
import NoIdeaCheckbox from '../../../Partial/NoIdeaCheckbox/NoIdeaCheckbox';
import clsx from 'clsx';
import { useSelector , useDispatch } from 'react-redux';
import * as actionTypes from '../../../Redux/Actions/actionTypes';


const useStyles = makeStyles(theme => ({
    Root: {
        display: "flex" , 
        justifyContent: "center" , 
        alignItems: "center" , 
        marginRight: "30px" ,
} ,

    TextField: {
        width: "400px" , 
        padding: "20px"
} ,

    NoIdeaStatus: {
        display: "none"
    }
}))


const LandlinePhone = (props) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [InputValue, setInputValue] = useState('')
    const [Error, setError] = useState(false);
    const [Checked, setChecked] = useState(false);
    // let {CurrentQuestion} = useSelector(state => state.currentqa);
    let CurrentQuestion = {...props} 

    const InputHanlder = (e) => {
        if (!ValidateLandlineNumber(e.target.value)) {
            setError(true)
        }else {
            setError(false)
        }
        
        let updateCurrentQuestion = JSON.parse(JSON.stringify(CurrentQuestion));
        updateCurrentQuestion.choices.description = e.target.value;
        dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: updateCurrentQuestion })
        dispatch({type: actionTypes.CHECK_FOR_REQUIRE_VALIDATE , CurrentQuestion: updateCurrentQuestion })
        dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: ValidateLandlineNumber(e.target.value) })

    }

    const checkboxChangeHandler = () => {
        setChecked(prev => !prev)
        let updateState = JSON.parse(JSON.stringify(CurrentQuestion));
        updateState.choices.description = "";
        updateState.noidea.status = !updateState.noidea.status
        dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: updateState });
        dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: updateState.noidea.status })
    }


    return (
           <QuestionTemplate number={CurrentQuestion.number} text={CurrentQuestion.caption}>
                <div className={classes.Root}>
                <TextField
                    type="number"
                    value={CurrentQuestion.choices.description}
                    disabled={CurrentQuestion.noidea.status}
                    className={classes.TextField}
                    error={Error}
                    onChange={InputHanlder}
                    onInput={(e) => {
                        e.target.value = e.target.value.toString().slice(0,12)
                    }}
                    placeholder="شماره تلفن ثابت"
                    variant="outlined" 
                      />

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

export default LandlinePhone;



function ValidateLandlineNumber(number) {
    const re = /^0\d{2,3}\d{8}$/;
    return re.test(String(number).toLowerCase());
}

