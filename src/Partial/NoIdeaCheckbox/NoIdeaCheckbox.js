
import { Checkbox } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({

    FormControlLabel: {
        padding: "8px 5px" , 
        borderRadius: "10px" , 
        backgroundColor: blueGrey[200] , 
        marginBottom: "23px"
    } ,

    Checkbox: {
    }
}))


const NoIdeaCheckbox = (props) => {
    const classes = useStyles();



    return (
        <FormControlLabel
            style={{...props.FormControlLabelStyle}}
            color="primary"
            className={clsx({
                [classes.FormControlLabel]: true ,
                [props.className]: true
            })}
            label={props.label ? props.label : "نظری ندارم"}
            control={<Checkbox 
                        style={{...props.CheckboxStyle}}
                        className={classes.Checkbox} 
                        checked={props.checked} 
                        onChange={props.onChange} />}
            />
    )
}

export default NoIdeaCheckbox;