import React , {useState} from 'react';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';
import { makeStyles , TextField } from '@material-ui/core';
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


const EmailField = (props) => {
    const classes = useStyles();
    const [Error, setError] = useState(false)
    const [Checked, setChecked] = useState(false)
    const [InputValue, setInputValue] = useState("")

    const InputHandler = (e) => {
        setError(!validateEmail(e.target.value));
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
                    onFocus={InputHandler}
                    onBlur={() => {
                        setError(false)
                    }}
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
                        [classes.NoIdeaStatus]: !props.noidea
                    })}
                    checked={Checked}
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

