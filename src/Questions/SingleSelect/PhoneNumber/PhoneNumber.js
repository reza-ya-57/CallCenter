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
        maxWidth: MaxWidth
    } ,
    NoIdeaStatus: {
        display: "none"
    }
}))


const PhoneNumber = (props) => {
    const classes = useStyles();
    const [InputValue, setInputValue] = useState('')
    const [Error, setError] = useState(false)
    const [Checked, setChecked] = useState(false)


    const InputHanlder = (e) => {
        setInputValue(e.target.value)
        if (e.target.value.toString().length < 11) {
            setError(true)
        } else if (e.target.value.toString()[0] + e.target.value.toString()[1] !== "09") {
            setError(true)
        } else {
            setError(false)
        }
    }
       
    const checkboxChangeHandler = () => {
        setChecked(prev => !prev)
    }


    return (
           <QuestionTemplate number={props.number} text={props.text}>
                <div className={classes.Root}>
                    <TextField
                            disabled={Checked}
                            className={classes.TextField}
                            error={Error}
                            value={InputValue}
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
                                [classes.NoIdeaStatus]: !props.noidea
                            })}
                            checked={Checked}
                            onChange={checkboxChangeHandler}
                            />
                </div>
           </QuestionTemplate>
    )
}

export default PhoneNumber;