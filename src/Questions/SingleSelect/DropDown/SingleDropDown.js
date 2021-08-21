/* eslint-disable no-use-before-define */
import React , {useState , useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';




export default function SingleDropDown(props) {
  const DataTable = props.DataTable;
  const [Input, setInput] = useState(0)
  const InputHandler = (e) => {
    DataTable.forEach(item => {
      if (item.title === e.target.innerText) {
          setInput(item.id)
      }
    })
  }

  return (

      <QuestionTemplate number={props.number} text={props.text}>
           <Autocomplete
            noOptionsText={'موردی یافت نشد'}
              onChange={(e) => InputHandler(e)}
              id="combo-box-demo"
              options={props.DataTable}
              getOptionLabel={(option) => option.title}
              style={{ width: 400 , padding: "20px" }}
              renderInput={(params) => <TextField
                                         {...params} 
                                        label={props.caption} 
                                        variant="outlined" />}
          />
      </QuestionTemplate>
  );
}




