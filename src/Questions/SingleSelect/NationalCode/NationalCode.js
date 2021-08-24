import React , { useState } from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';
import { FilledInput , Input , InputBase } from '@material-ui/core';

const MaxWidth = 400
const useStyles = makeStyles(theme => ({
    TextField: {
        padding: "20px" , 
        maxWidth: MaxWidth , 
    } 
}))


const NationalCode = (props) => {
    const classes = useStyles();
    const [Input, setInput] = useState('')
    const [Error, setError] = useState(false)
    



    const InputHanlder = (e) => {
        setInput(e.target.value)
        if (!checkCodeMeli(e.target.value.toString())) {
            setError(true)
        } else {
            setError(false)
            setInput(e.target.value)
        }
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
                    // onInput={(e) => {
                    //     e.target.value = e.target.value.toString().slice(0,11)
                        
                    // }}
                    placeholder="کد ملی"
                    variant="outlined" 
                    autoFocus  />
            </div>
           </QuestionTemplate>
        </div>
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