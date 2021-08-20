import React from 'react';
import { makeStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';

const useStyles = makeStyles(theme => ({
    Root: {
        
    }
}))

const NumberField = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.Root}>
            <QuestionTemplate number={props.number} text={props.text}>
                <TextField 
                    variant="outlined" 
                    placeholder={props.placeholder} 
                    type="number" />
            </QuestionTemplate>
        </div>
    )
}

export default NumberField;