/* eslint-disable no-use-before-define */
import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
  Root: {
    display: "flex" , 
    justifyContent: "center"
  }
}))


export default function SingleDropDown(props) {
  const classes = useStyles();
  const DataTable = props.DataTable;
  const [, setInput] = useState(0)
  const InputHandler = (e) => {
    DataTable.forEach(item => {
      if (item.title === e.target.innerText) {
          setInput(item.id)
      }
    })
  }

  return (

      <QuestionTemplate number={props.number} text={props.text}>
          <div className={classes.Root}>
            <Autocomplete
              noOptionsText={'موردی یافت نشد'}
                onChange={(e) => InputHandler(e)}
                options={props.DataTable}
                getOptionLabel={(option) => option.title}
                style={{ width: 400 , padding: "20px" }}
                renderInput={(params) => <TextField
                                          {...params} 
                                          label={props.caption} 
                                          variant="outlined" />}
            />
          </div>
      </QuestionTemplate>
  );
}




