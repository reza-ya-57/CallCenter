/* eslint-disable no-use-before-define */
import React , {useState} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';

const useStyles = makeStyles(theme => ({
  Autocomplete: {
    width: "70%" , 
    padding: "20px"
  }
}))

export default function MultiDropDown(props) {
  // const DataTable = props.DataTable;
  const [Input, setInput] = useState([])
  const classes = useStyles();

  const InputHandler = (e , list , reason , detail) => {
    let updateInput = [];
    list.forEach(item => {
      updateInput.push(item.id)
    })
    setInput(updateInput)
    console.log(updateInput)
  }

  return (
    <QuestionTemplate number={props.number} text={props.text}>
         <Autocomplete
            className={classes.Autocomplete}
            onChange={(e , list, reason , detail) => InputHandler(e , list, reason , detail)}
            multiple
            id="tags-outlined"
            options={props.DataTable}
            getOptionLabel={(option) => option.title}
            filterSelectedOptions
            renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label={props.caption}
          />
        )}
      />
    </QuestionTemplate>
  );
}



