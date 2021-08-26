import React , { useState } from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';
import NoIdeaCheckbox from '../../../Partial/NoIdeaCheckbox/NoIdeaCheckbox';
import clsx from 'clsx';


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
    const classes = useStyles();
    const [InputValue, setInputValue] = useState('')
    const [Error, setError] = useState(false)
    const [Checked, setChecked] = useState(false)

    const InputHanlder = (e) => {
        setInputValue(e.target.value)
        if (!ValidateLandlineNumber(e.target.value)) {
            setError(true)
        }else {
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
                    onInput={(e) => {
                        e.target.value = e.target.value.toString().slice(0,12)
                    }}
                    placeholder="شماره تلفن ثابت"
                    variant="outlined" 
                    type="tel"
                      />

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

export default LandlinePhone;



function ValidateLandlineNumber(number) {
    const re = /^0\d{2,3}\d{8}$/;
    return re.test(String(number).toLowerCase());
}

