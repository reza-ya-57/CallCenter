/* eslint-disable no-use-before-define */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import QNumber from '../../../Partial/QNumber/QNumber';
import { Typography } from '@material-ui/core';

const MaxWidth = 400;
const Height = 600
const useStyles = makeStyles((theme) => ({
   

    NumberWraper: {
        marginRight: '10px' , 
        display: "flex" , 
        alignItems: "flex-start" , 
        justifyContent: "flex-end"
    } ,

    Question: {
        width: "80%" ,
        margin: "auto" , 
        marginTop: "40px" ,
        maxHeight: Height  , 
        overflow: "auto" , 
        border: "1px solid black" , 
        borderRadius: "10px 10px 10px 10px" 
    } ,

    Text: {
        color: '#3f51b5' ,
        color: "white" ,
        marginBottom: '20px' , 
        position: "relative" , 
        top: "10px" , 
    } , 
    Answer: {
        backgroundColor: "#E8E8E8" ,
        // marginTop: "10px" , ,
        padding: "10px 20px" ,
        paddingBottom: "30px" ,
        width: "100%" ,
    }
}));

export default function QuestionTemplate(props) {
  const classes = useStyles();

  return (
        <div className={classes.Question}>
            <div style={{display: 'flex' ,   alignItems: "center"  , backgroundColor: "#3B3E4F" ,
                        color : "white"  ,
                        borderRadius: "10px 10px 0px 0px" , padding: "0px 10px"}}>
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
