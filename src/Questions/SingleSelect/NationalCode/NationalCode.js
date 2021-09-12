import React , { useState } from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';
import NoIdeaCheckbox from '../../../Partial/NoIdeaCheckbox/NoIdeaCheckbox';
import { useStore } from 'react-redux';
import { useSelector , useDispatch } from 'react-redux';
import * as actionTypes from '../../../Redux/Actions/actionTypes';
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
        display: "none"
    }
}))


const NationalCode = (props) => {
    const dispatch = useDispatch();
    const store = useStore();
    // let {CurrentQuestion} = useSelector(state => state.currentqa);
    let CurrentQuestion = {...props} 
    const classes = useStyles();
    const [Error, setError] = useState(false)
    const [Checked, setChecked] = useState(false)
    const [InputValue, setInputValue] = useState("")
    let helperTextForTextField = "فرمت کد ملی ایران";

    const InputHanlder = (e) => {
        setInputValue(e.target.value)
        if (!checkCodeMeli(e.target.value.toString())) {
            setError(true)
        } else {
            setError(false)
        }
        let validate = !checkCodeMeli(e.target.value.toString())

        console.log(validate)
        let updateCurrentQuestion = JSON.parse(JSON.stringify(CurrentQuestion));
        updateCurrentQuestion.choices.description = e.target.value;
        dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: updateCurrentQuestion })
        dispatch({type: actionTypes.CHECK_FOR_REQUIRE_VALIDATE , CurrentQuestion: updateCurrentQuestion })
        dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload:     checkCodeMeli(e.target.value.toString()) })
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
                            // onInput={(e) => {
                            //     e.target.value = e.target.value.toString().slice(0,11)
                                
                            // }}
                            placeholder="کد ملی"
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

export default NationalCode;

function checkCodeMeli(code) {
    var L=code.length;
    if(L<8 || parseInt(code,10)===0) return false;
    code=('0000'+code).substr(L+4-10);
    if(parseInt(code.substr(3,6),10)===0) return false;
    var c=parseInt(code.substr(9,1),10);
    var s=0;
    for(var i=0;i<9;i++)
    s+=parseInt(code.substr(i,1),10)*(10-i);
    s=s%11;
    return (s<2 && c===s) || (s>=2 && c===(11-s));
   
}