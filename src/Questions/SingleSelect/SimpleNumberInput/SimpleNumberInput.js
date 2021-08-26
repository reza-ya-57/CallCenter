import React , { useState } from 'react';
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
        display: "none"
    }
}))


const SimpleNumberInput = (props) => {
    const classes = useStyles();
    const [InputValue, setInputValue] = useState('')
    const [Error, setError] = useState(false)
    const [Checked, setChecked] = useState(false)
    


    const InputHanlder = (e) => {
        setInputValue(e.target.value)
        switch(props.decimal) {
            case false : {
                if (hasDecimal(e.target.value)) {
                    setError(true)
                } else if (e.target.value.toString().length <= props.min) {
                    setError(true)
                } else {
                    setError (false)
                }
            }
                break
            case true : {
                if (e.target.value.toString().length <= props.min) {
                    setError(true)
                } else {
                    setError(false)
                }
            }
        }
        setInputValue(e.target.value)

    }

    const checkboxChangeHandler = () => {
        setChecked(prev => !prev)
    }

    return (
           <QuestionTemplate number={props.number} text={props.text}>
            <div className={classes.Root}>
            <TextField
                disabled={Checked}
                onFocus={InputHanlder}
                onBlur={() => {
                    setError(false)
                }}
                className={classes.TextField}
                error={Error}
                value={InputValue}
                onChange={InputHanlder}
                type='number'
                onInput={(e) => {
                    e.target.value = e.target.value.toString().slice(0,props.max)
                    
                }}
                placeholder="شماره"
                variant="outlined" 
                autoFocus  />
            <NoIdeaCheckbox
                className={clsx({
                    [classes.NoIdeaStatus]: !props.noidea
                })}
                checked={Checked}
                onChange={checkboxChangeHandler}
                />
            </div>
           </QuestionTemplate>
    )
}

export default SimpleNumberInput;



function hasDecimal (num) {
    console.log(!(num % 1))
    return !!(num % 1);
}