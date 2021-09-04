import React , {useState} from 'react';
import { useStore } from 'react-redux';
import { useSelector , useDispatch } from 'react-redux';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';
import { makeStyles , TextField } from '@material-ui/core';
import NoIdeaCheckbox from '../../../Partial/NoIdeaCheckbox/NoIdeaCheckbox';
import clsx from 'clsx';
import * as actionTypes from '../../../Redux/Actions/actionTypes';
import { EmailTheme } from './EmailTheme';
import { ThemeProvider } from '@material-ui/styles';


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


const EmailField = (props) => {
    let dispatch = useDispatch();
    const store = useStore();
    let {CurrentQuestion} = useSelector(state => state.currentqa);

    const classes = useStyles();
    const [Error, setError] = useState(false)
    const [Checked, setChecked] = useState(false)
    const [, setInputValue] = useState("")

    const InputHandler = (e) => {
        console.log(e.target.value)
        setError(!validateEmail(e.target.value));
        setInputValue(e.target.value);
        let updateCurrentQuestion = JSON.parse(JSON.stringify(CurrentQuestion));
        updateCurrentQuestion.choices.description = e.target.value;
        dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: updateCurrentQuestion })
        dispatch({type: actionTypes.CHECK_FOR_REQUIRE_VALIDATE , CurrentQuestion: updateCurrentQuestion })
        
        dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: !validateEmail(e.target.value) })
    }


    const checkboxChangeHandler = () => {
        setChecked(prev => !prev)
    let updateState = JSON.parse(JSON.stringify(CurrentQuestion));
    updateState.choices.description = "";
    updateState.noidea.status = !updateState.noidea.status
    dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: updateState });
    let {Validate} = store.getState().validate
    dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: !updateState.noidea.status })
    }

    return (
            <QuestionTemplate number={props.number} text={props.text}>
            <div className={classes.Root}>
               <TextField
                    value={CurrentQuestion.choices.description}
                    disabled={CurrentQuestion.noidea.status}
                    // onFocus={InputHandler}
                    // onBlur={() => {
                    //     setError(false)
                    // }}
                    placeholder="example@gmail.com"
                    className={classes.TextField}
                    type="email"
                    variant="outlined"
                    onChange={InputHandler}
                    inputProps={{ maxLength: 40 }}
                    error={Error}
                    autoFocus
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

export default EmailField;



function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

