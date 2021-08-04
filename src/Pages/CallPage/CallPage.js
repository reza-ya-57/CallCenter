import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const PaperWidth = "600px";


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  Paper: {
    maxWidth: PaperWidth
  }
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
      <div style={{ padding: "10px" , display: "flex" , flexWrap: "wrap"}}>
        <Paper className={classes.Paper}>
          lorelsfjlsdjflsdfjsldkfjkfjosidfsdfsdfsdfsdfv
          lorelsfjlsdjflsdfjsldkfjkfjosidfsdfsdfsdfsdfv
          lorelsfjlsdjflsdfjsldkfjkfjosidfsdfsdfsdfsdfv
          lorelsfjlsdjflsdfjsldkfjkfjosidfsdfsdfsdfsdfv
          lorelsfjlsdjflsdfjsldkfjkfjosidfsdfsdfsdfsdfv
          lorelsfjlsdjflsdfjsldkfjkfjosidfsdfsdfsdfsdfv
        </Paper>
      </div>
  );
}