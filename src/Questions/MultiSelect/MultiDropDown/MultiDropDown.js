/* eslint-disable no-use-before-define */
import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';



export default function MultiDropDown(props) {

  return (
    <QuestionTemplate number={props.number} text={props.text}>
         <Autocomplete
        multiple
        id="tags-outlined"
        options={Top100City}
        getOptionLabel={(option) => option.title}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="شهر"
          />
        )}
      />
    </QuestionTemplate>
  );
}







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

