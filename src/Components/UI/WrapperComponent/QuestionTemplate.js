/* eslint-disable no-use-before-define */
import React from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import QNumber from '../../../Partial/QNumber/QNumber';
import { Typography } from '@material-ui/core';

const MaxWidth = 400;

const useStyles = makeStyles((theme) => ({
    Root: {
      display: 'flex' ,
      margin: '10px' ,
      boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' ,
      backgroundColor: '#f9f9f9'  ,
      padding: '40px 20px' ,
      borderRadius: '10px'
    } , 

    NumberWraper: {
        marginRight: '10px'
    } ,

    Question: {
        minWidth: MaxWidth
    } ,

    Text: {
        color: '#3f51b5' ,
        marginBottom: '20px'
    }
}));

export default function QuestionTemplate(props) {
  const classes = useStyles();

  return (
    <div className={classes.Root}>
        <div className={classes.NumberWraper}>
            <QNumber number={props.number} />
        </div>
        <div className={classes.Question}>
            <Typography className={classes.Text}>
                {props.text}
            </Typography>
            <div className={classes.Answer}>
                {props.children}
            </div>
        </div>
    </div>
  );
}
