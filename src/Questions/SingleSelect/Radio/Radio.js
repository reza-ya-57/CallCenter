import React from 'react';
import clsx from 'clsx';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';

const Data = {
    text: ' آیا در انتهاي كار (در زمان ترخيص) مسئول ترخيص موارد ثبت شده در برگه ي پذيرش را براي شما توضيح دادند كه چه كاري روي ماشين انجام دادند؟'  ,
    Horizontal: false ,
    value: {
        value2: 'خیر' , 
        value1: 'بله' ,
        value3: 'نمیدانم' ,
        value4: 'سایر موارد'
    }
}

const useStyles = makeStyles(theme => ({
    
}))

export default function RadioQuestion(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  let FormControlLabels = [];

  for (let item in Data.value) {
      FormControlLabels.push(
        <FormControlLabel value={Data.value[item]} 
        control={<Radio 
                classes={{colorPrimary: classes.Radio ,
                checked: classes.Radio}} 
                />} 
                    label={Data.value[item]} />
      )
  }


  return (

      <QuestionTemplate number={props.number} text={props.text}>
        <FormControl className={classes.FormControl} >
            {/* <FormLabel className={classes.Text} component="div">{Data.text}</FormLabel> */}
                <RadioGroup  className={clsx({
                                            [classes.RadioGroupRow]: Data.Horizontal,
                                            })} 
                            value={value} onChange={handleChange}>
                            {FormControlLabels}
                            <TextField 
                                multiline={true}
                                style={{marginTop: "20px" , width: '600px'}}
                                color="secondary" 
                                variant="outlined" 
                                label="سایر موارد"
                                disabled={!(value === "سایر موارد")}/>
                </RadioGroup>
        </FormControl>
      </QuestionTemplate>

   
  );
}
