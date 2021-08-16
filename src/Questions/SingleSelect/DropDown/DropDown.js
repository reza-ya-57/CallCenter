/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';




export default function DropDown(props) {
  return (

      <QuestionTemplate number={props.number} text={props.text}>
           <Autocomplete
              id="combo-box-demo"
              options={Top100City}
              getOptionLabel={(option) => option.title}
              style={{ width: 400 }}
              renderInput={(params) => <TextField {...params} label="شهر" variant="outlined" />}
          />
      </QuestionTemplate>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const Top100City = [
  { title: 'تهران' } ,
  { title: 'شیراز' } ,
  { title: 'اصفهان' } ,
  { title: 'قزوین' } ,
  { title: 'مشهد' } ,
  { title: 'تبریز' } ,
  { title: 'سمنان' } ,
  { title: 'کرمان' } ,
  { title: 'یزد' } ,
  { title: 'بروجرد' } ,
  { title: 'بجنورد' } ,
  { title: 'زنجان' } ,
  { title: 'خوزستان' } ,
  { title: 'گرکان' } ,
  { title: 'ساری' } ,
  { title: 'لاهیجان' } ,
  { title: 'چالوس' } ,
  { title: 'اردبیل' } ,
  { title: 'نوشهر' } ,
  { title: 'زاهدان' } ,
]


