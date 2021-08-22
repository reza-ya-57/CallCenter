import React , { useState } from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';

const MaxWidth = 400
const useStyles = makeStyles(theme => ({
    TextField: {
        padding: "20px" , 
        maxWidth: MaxWidth , 
    } 
}))


const SimpleNumberInput = (props) => {
    const classes = useStyles();
    const [Input, setInput] = useState('')
    const [Error, setError] = useState(false)
    


    const InputHanlder = (e) => {
        switch(props.decimal) {
            case false : {
                if (hasDecimal(e.target.value)) {
                    console.log("hello")
                    setError(true)
                } else if (e.target.value.toString().length <= props.min) {
                    setError(true)
                } else {
                    console.log("whaaaat")
                    setError (false)
                }
            }
                break
            case true : {
                if (e.target.value.toString().length <= props.min) {
                    setError(true)
                } else {
                    console.log("double whate")
                    setError(false)
                }
            }
        }
        setInput(e.target.value)

    }


    return (
        <div className={classes.Root}>
           <QuestionTemplate number={props.number} text={props.text}>
            <div>
            <TextField
                    onFocus={InputHanlder}
                    onBlur={() => {
                        setError(false)
                    }}
                    className={classes.TextField}
                    error={Error}
                    value={Input}
                    onChange={InputHanlder}
                    type='number'
                    onInput={(e) => {
                        e.target.value = e.target.value.toString().slice(0,props.max)
                        
                    }}
                    placeholder="شماره"
                    variant="outlined" 
                    autoFocus  />
            </div>
           </QuestionTemplate>
        </div>
    )
}

export default SimpleNumberInput;

function hasDecimal (num) {
    console.log(!(num % 1))
    return !!(num % 1);
}