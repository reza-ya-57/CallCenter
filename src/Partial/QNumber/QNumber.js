
import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    Root: {
        backgroundColor: theme.palette.success.main,
        color: 'white' ,
        display: 'flex' , 
        justifyContent: 'center' , 
        alignItems: 'center' , 
        width: '30px' , 
        height: '30px' ,
        borderRadius: '100%' , 
        paddingTop: '3px' , 
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'
    } ,

}))



const QNumber = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.Root}>
            <Typography className={classes.Number}>
                {props.number}
            </Typography>
        </div>
    )
}

export default QNumber;