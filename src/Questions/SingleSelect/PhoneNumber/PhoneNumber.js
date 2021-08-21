import React , { useState } from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';
import { FilledInput , Input , InputBase } from '@material-ui/core';

const MaxWidth = 400
const useStyles = makeStyles(theme => ({
    TextField: {
        padding: "20px" , 
        maxWidth: MaxWidth
    } ,
    Root: {

    }
}))


const PhoneNumber = (props) => {
    const classes = useStyles();
    const [Input, setInput] = useState('')
    const [Error, setError] = useState(false)

    const InputHanlder = (e) => {
        setInput(e.target.value)
        if (e.target.value.toString().length < 11) {
            setError(true)
        } else if (e.target.value.toString()[0] + e.target.value.toString()[1] != "09") {
            setError(true)
        } else {
            setError(false)
        }
    }


    return (
        <div className={classes.Root}>
           <QuestionTemplate number={props.number} text={props.text}>
            <div>
            <TextField
                    color="success"
                    className={classes.TextField}
                    error={Error}
                    value={Input}
                    onChange={InputHanlder}
                    type='number'
                    onInput={(e) => {
                        e.target.value = e.target.value.toString().slice(0,11)
                        
                    }}
                    placeholder="شماره تلفن همراه"
                    variant="outlined" 
                    autoFocus  />
            </div>
           </QuestionTemplate>
        </div>
    )
}

export default PhoneNumber;