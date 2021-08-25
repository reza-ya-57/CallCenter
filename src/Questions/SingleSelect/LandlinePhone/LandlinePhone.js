import React , { useState } from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';
import { FilledInput , Input , InputBase } from '@material-ui/core';
import clsx from 'clsx';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const useStyles = makeStyles(theme => ({
    TextField: {
    width: "400px" , 
    padding: "20px"
    } ,

    CheckedBoxNonOf: {
        display: "none"
        }
}))


const LandlinePhone = (props) => {
    const classes = useStyles();
    const [Input, setInput] = useState('')
    const [Error, setError] = useState(false)
    const [Checked, setChecked] = useState(false)

    const InputHanlder = (e) => {
        setInput(e.target.value)
        if (!ValidateLandlineNumber(e.target.value)) {
            setError(true)
        }else {
            setError(false)
        }

    }

    const handleChecked = () => {
        setChecked(prev => !prev)
    }


    return (
        <div className={classes.Root}>
           <QuestionTemplate number={props.number} text={props.text}>
                <div style={{display: "flex" , justifyContent: "flex-start" , alignItems: "center" , marginRight: "30px" , alignItems: "flex-start" }}>
                <TextField
                    disabled={Checked}
                    className={classes.TextField}
                    error={Error}
                    value={Input}
                    onChange={InputHanlder}
                    type='tel'
                    onInput={(e) => {
                        e.target.value = e.target.value.toString().slice(0,12)
                    }}
                    placeholder="شماره تلفن ثابت"
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

                    {/* <Autocomplete
                        id="combo-box-demo"
                        options={areacode}
                        getOptionLabel={(option) => option.title}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                        /> */}
           </QuestionTemplate>
        </div>
    )
}

export default LandlinePhone;



function ValidateLandlineNumber(number) {
    const re = /^0\d{2,3}\d{8}$/;
    return re.test(String(number).toLowerCase());
}

// const areacode = [
//     { code: 021 , title: 'تهران' } ,
//     { code: 2 , title: 'شیراز' } ,
//     { code: 3 , title: 'اصفهان' } ,
//     { code: 4 , title: 'قزوین' } ,
//     { code: 5 , title: 'مشهد' } ,
//     { code: 6 , title: 'تبریز' } ,
//     { code: 7 , title: 'سمنان' } ,
//     { code: 8 , title: 'کرمان' } ,
//     { code: 9 , title: 'یزد' } ,
//     { code: 10 , title: 'بروجرد' } ,
//     { code: 11, title: 'بجنورد' } ,
//     { code: 12, title: 'زنجان' } ,
//     { code: 13, title: 'خوزستان' } ,
//     { code: 14, title: 'گرکان' } ,
//     { code: 15, title: 'ساری' } ,
//     { code: 16, title: 'لاهیجان' } ,
//     { code: 17, title: 'چالوس' } ,
//     { code: 18, title: 'اردبیل' } ,
//     { code: 19, title: 'نوشهر' } ,
//     { code: 20, title: 'زاهدان' } ,
// ]