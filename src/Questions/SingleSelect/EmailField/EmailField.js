import React , {useState} from 'react';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';
import { makeStyles , TextField } from '@material-ui/core';
import { PowerInputSharp } from '@material-ui/icons';
import clsx from 'clsx';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


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
    const [Checked, setChecked] = useState(false)

    const InputHandler = (e) => {
        setError(!validateEmail(e.target.value));
    }

    const handleChecked = () => {
        setChecked(prev => !prev)
    }

    return (
        <QuestionTemplate number={props.number} text={props.text}>
            <div style={{display: "flex" , justifyContent: "flex-start" , alignItems: "center" , marginRight: "30px" , alignItems: "flex-start" }} className={classes.Root}>
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
                    />
                <FormControlLabel
                    className={clsx({
                        [classes.CheckedBoxNonOf]: props.noidea
                    })}
                    style={{backgroundColor: "grey" , padding: "5px 10px" , color: "white" , borderRadius: "10px" , height: "55px" , marginTop: "19px"}}
                        control={<Checkbox checked={Checked} onChange={handleChecked} name="check" />}
                        label="هیچکدام"
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

