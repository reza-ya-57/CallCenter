import React , {useState} from 'react';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';
import { makeStyles , TextField } from '@material-ui/core';
import { PowerInputSharp } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
    Root: {

    } , 
    
    TextField: {
    width: "400px" , 
    padding: "20px"
    }
}))


const EmailField = (props) => {
    const classes = useStyles();
    const [Error, setError] = useState(false)

    const InputHandler = (e) => {
        setError(!validateEmail(e.target.value));
    }

    return (
        <QuestionTemplate number={props.number} text={props.text}>
            <div className={classes.Root}>
               <TextField
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

