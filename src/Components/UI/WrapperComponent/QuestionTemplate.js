/* eslint-disable no-use-before-define */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import QNumber from '../../../Partial/QNumber/QNumber';
import { Typography } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';

const Height = 600
const useStyles = makeStyles((theme) => ({
   

    NumberWraper: {
        marginRight: '10px' , 
        display: "flex" , 
        alignItems: "flex-start" , 
        justifyContent: "flex-end"
    } ,

    QuestionContainer: {
        width: "100%" ,
        maxHeight: Height  , 
        border: "1px solid black" , 
        borderRadius: "10px 10px 10px 10px" 
    } ,

    Question: {
        display: 'flex' ,   
        alignItems: "center"  , 
        backgroundColor: blueGrey[900] ,
        color : "white"  ,
        borderRadius: "10px 10px 0px 0px" , 
        padding: "0px 10px"
    } ,

    Text: {
        color: "white" ,
        marginBottom: '20px' , 
        position: "relative" , 
        top: "10px" , 
    } , 
    Answer: {
        backgroundColor: blueGrey[50],
        padding: "10px 20px" ,
        paddingBottom: "30px" ,
        width: "100%" ,
        borderRadius: "10px 10px 10px 10px" 
    }
}));

export default function QuestionTemplate(props) {
  const classes = useStyles();

  return (
        <div className={classes.QuestionContainer}>
            <div className={classes.Question}>
                <div className={classes.NumberWraper}>
                        <QNumber number={props.number} />
                </div>
                <Typography className={classes.Text}>
                    {props.text}
                </Typography>
            </div>
            <div className={classes.Answer}>
                {props.children}
            </div>
        </div>
  );
}
