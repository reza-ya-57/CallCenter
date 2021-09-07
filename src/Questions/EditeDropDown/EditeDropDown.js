import React , {useEffect} from 'react';
import "./EditeDropDown.css" ;
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core';
import { useSelector , useDispatch } from 'react-redux';
import * as actionTypes from '../../Redux/Actions/actionTypes';
import clsx from "clsx";
import { ReturnQuestionTurn } from '../../functions/handleData';


const MaxHeight = 700
const useStyles = makeStyles(theme => ({
    Root: {
    } , 
    
    Button: {
    } , 

    Paper: {
        marginTop: "80px" , 
        width: "60px" , 
        display:"flex" , 
        justifyContent: "center" , 
        alignItems: 'center'  , 
        maxHeight: MaxHeight
    } , 

    CurrentQuestion: {
        color: "green" , 
        backgroundColor: "red"
    }
}))


export default function EditeDropDown() {
    let dispatch = useDispatch();
    let {Data} = useSelector(state => state.qa);
    console.log(Data)
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e, id) => {
      console.log(id)
    setAnchorEl(null);
  };

  let menuList = [];
  Data.forEach(item => {

    menuList.push(
      <MenuItem 
        disabled={!item.answered} key={item.id} onClick={(e) => handleClose(e, item.id)}>{item.number}</MenuItem>
    )
})
  useEffect(() => {
    Data.forEach(item => {
        let Current = ReturnQuestionTurn(Data)
        if (item.id === Current.id) {
            menuList.push(
                <MenuItem 
                  className={classes.CurrentQuestion}  
                  disabled={!item.answered} 
                  key={item.id} 
                  onClick={(e) =>handleClose(e, item.id)}>
                    {item.number}
                  </MenuItem>
              )
        } else {
            menuList.push(
                <MenuItem 
                className={classes.CurrentQuestion}
                  disabled={!item.answered} 
                  key={item.id} 
                  onClick={(e) =>handleClose(e, item.id)}>
                    {item.number}
                  </MenuItem>
              )
        }
        
    })
  }, [Data])

  return (
    <div className={classes.Root}>
      <Button className={classes.Button} variant="contained" color="primary" aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        ویرایش سوال ها
      </Button>
      <Menu
        id="fade-menu"
        classes={{ paper: classes.Paper }}
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
          {menuList}
      </Menu>
    </div>
  );
}
