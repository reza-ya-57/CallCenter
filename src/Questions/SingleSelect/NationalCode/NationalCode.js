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
        maxWidth: MaxWidth , 
    }  ,

    NoIdeaStatus: {
        display: "none"
    }
}))


const NationalCode = (props) => {
    const classes = useStyles();
    const [Error, setError] = useState(false)
    const [Checked, setChecked] = useState(false)
    const [InputValue, setInputValue] = useState("")


    const InputHanlder = (e) => {
        setInputValue(e.target.value)
        if (!checkCodeMeli(e.target.value.toString())) {
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
                            onFocus={InputHanlder}
                            onBlur={() => {
                                setError(false)
                            }}
                            className={classes.TextField}
                            error={Error}
                            value={InputValue}
                            onChange={InputHanlder}
                            type='tel'
                            // onInput={(e) => {
                            //     e.target.value = e.target.value.toString().slice(0,11)
                                
                            // }}
                            placeholder="کد ملی"
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

export default NationalCode;

function checkCodeMeli(code) {
    var L=code.length;
    if(L<8 || parseInt(code,10)==0) return false;
    code=('0000'+code).substr(L+4-10);
    if(parseInt(code.substr(3,6),10)==0) return false;
    var c=parseInt(code.substr(9,1),10);
    var s=0;
    for(var i=0;i<9;i++)
    s+=parseInt(code.substr(i,1),10)*(10-i);
    s=s%11;
    return (s<2 && c==s) || (s>=2 && c==(11-s));
    return true;
}