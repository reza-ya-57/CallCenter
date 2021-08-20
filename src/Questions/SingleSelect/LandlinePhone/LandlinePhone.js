import React , { useState } from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';
import { FilledInput , Input , InputBase } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    Root: {

    }
}))


const LandlinePhone = (props) => {
    const classes = useStyles();
    const [Input, setInput] = useState('')
    const [Error, setError] = useState(false)

    const InputHanlder = (e) => {
        console.log(e.target.value.toString().length)
        setInput(e.target.value)
        if (e.target.value.toString().length < 11) {
            setError(true)
        }else {
            setError(false)
        }
    }


    return (
        <div className={classes.Root}>
           <QuestionTemplate number={props.number} text={props.text}>
                <TextField
                    error={Error}
                    value={Input}
                    onChange={InputHanlder}
                    type='number'
                    onInput={(e) => {
                        e.target.value = e.target.value.toString().slice(0,11)
                    }}
                    placeholder="شماره تلفن ثابت"
                    variant="outlined" 
                    autoFocus  />
           </QuestionTemplate>
        </div>
    )
}

export default LandlinePhone;