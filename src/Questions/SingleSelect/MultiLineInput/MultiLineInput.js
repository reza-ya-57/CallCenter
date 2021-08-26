import React , { useState } from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';
import "./MultiLineInput.css"

const useStyles = makeStyles(theme => ({
TextField: {
    } , 


}))


const MultiLineInput = (props) => {
    const classes = useStyles();
    const [Input, setInput] = useState('')
    const [Error, ] = useState(false)

    const InputHanlder = (e) => {
        setInput(e.target.value)

    }


    return (
        <div className={classes.Root}>
           <QuestionTemplate number={props.number} text={props.text}>
                <TextField
                    id="hello"
                    multiline={true}
                    maxRows={2}
                    className={classes.TextField}
                    error={Error}
                    value={Input}

                    onChange={InputHanlder}
                    onInput={(e) => {
                        e.target.value = e.target.value.toString().slice(0,1500)
                    }}
                    placeholder="توضیحات"
                    variant="outlined" 
                    autoFocus  />
           </QuestionTemplate>
        </div>
    )
}

export default MultiLineInput;