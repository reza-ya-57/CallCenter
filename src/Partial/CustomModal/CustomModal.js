import React from 'react';
import "./CustomModal.css";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import CancelIcon from '@material-ui/icons/Cancel';
import { IconButton } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';



const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    width: "500px" ,
    Minheight: "300px" ,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: "5px" , 
    outline: "none"
  },

  Message: {
    width: "100%" , 
    textAlign: "center" ,

  } ,

  ButtonGroup: {
    backgroundColor: "red" ,
    width: "100px" ,
    margin: "auto" ,
  } , 

}));

export default function CustomModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        react-transition-group
      </button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.ModalStatus}
        onClose={props.ModalhandleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.ModalStatus}>
          <div className={classes.paper}>
            <Grid container direction="column">
                <Grid item style={{display: "flex" , justifyContent: "center" , position: "relative" , right: "10px"}}>
                  {/* <IconButton onClick={props.ModalhandleClose} size="small" color="secondary">
                      <CancelIcon />
                  </IconButton> */}
                  {/* <WarningIcon style={{fontSize: "50px" , color: "red" }} /> */}
                </Grid>
                <Grid item >
                    <h2 className={classes.Message}>{props.ModalMessageHeader}</h2>
                    <h4 className={classes.Message}>{props.ModalMessageDescription}</h4>
                </Grid>
                <Grid item justifyContent="center" alignItems="center" style={{display: "flex" , justifyContent: "center" , marginTop: "10px"}}>
                    <ButtonGroup className={classes.ButtonGroup} variant="contained" color="primary" aria-label="contained primary button group">
                      <Button color="primary" onClick={props.modalSubmitHandler}>تایید</Button>
                      <Button color="secondary" onClick={props.ModalCancel}>رد</Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
