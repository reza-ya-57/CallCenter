import React , { useState } from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';
import { FilledInput , Input , InputBase } from '@material-ui/core';
import clsx from 'clsx';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const MaxWidth = 400
const useStyles = makeStyles(theme => ({
    TextField: {
        padding: "20px" , 
        maxWidth: MaxWidth
    } ,
    Root: {

    } ,
    CheckedBoxNonOf: {
        display: "none"
        }
}))


const PhoneNumber = (props) => {
    const classes = useStyles();
    const [Input, setInput] = useState('')
    const [Error, setError] = useState(false)
    const [Checked, setChecked] = useState(false)

   
    const handleChecked = () => {
        setChecked(prev => !prev)
    }


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
            <div style={{display: "flex" , justifyContent: "flex-start" , alignItems: "center" , marginRight: "30px" , alignItems: "flex-start" }}>
            <TextField
                    disabled={Checked}
                    type="tel"
                    color="success"
                    className={classes.TextField}
                    error={Error}
                    value={Input}
                    onChange={InputHanlder}
                    type='tel'
                    onInput={(e) => {
                        e.target.value = e.target.value.toString().slice(0,11)
                        
                    }}
                    placeholder="شماره تلفن همراه"
                    variant="outlined" 
                    autoFocus  />
            <FormControlLabel
                    className={clsx({
                        [classes.CheckedBoxNonOf]: !props.noidea
                    })}
                    style={{backgroundColor: "grey" , padding: "5px 10px" , color: "white" , borderRadius: "10px" , height: "55px" , marginTop: "19px"}}
                        control={<Checkbox checked={Checked} onChange={handleChecked} name="check" />}
                        label="هیچکدام"
                    />
            </div>
           </QuestionTemplate>
        </div>
    )
}

export default PhoneNumber;