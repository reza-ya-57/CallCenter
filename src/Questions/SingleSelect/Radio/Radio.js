import React , {useState} from 'react';
import clsx from 'clsx';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles, Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import QNumber from '../../../Partial/QNumber/QNumber';

const Data = {
    text: ' آیا در انتهاي كار (در زمان ترخيص) مسئول ترخيص موارد ثبت شده در برگه ي پذيرش را براي شما توضيح دادند كه چه كاري روي ماشين انجام دادند؟'  ,
    Horizontal: false ,
    value: {
        value2: 'خیر' , 
        value1: 'بله' ,
        value3: 'نمیدانم' ,
        value4: 'سایر موارد'
    }
}

const useStyles = makeStyles(theme => ({
    Root: {
        display: 'flex' , 
        margin: '10px' ,
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' ,
        backgroundColor: '#f9f9f9'  ,
        padding: '20px' ,
        borderRadius: '10px' ,
    } ,

    RadioGroupRow: {
    display: 'flex' , 
    flexDirection: 'row' , 
    } ,

    NumberWraper: {
        marginRight: '15px' 
    }
    // Root: {
    //     boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' ,
    //     margin: '10px' ,
    //     backgroundColor: '#f9f9f9'  ,
    //         borderRadius: '10px' ,
    //         backgroundColor: '#f9f9f9' ,
    //         padding: '20px' ,
    //         lineHeight: '2rem'
    // }  ,

    // Radio: {
    //     color: 'primary'
    // } ,

    // Text: {
    //     lineHeight: '30px' ,
    // } ,

    // RadioGroupRow: {
    //     display: 'flex' , 
    //     flexDirection: 'row' , 
    // } ,

    // RadioGroupcolumn: {

    // } ,

    // NumberWraper: {
    //     // borderRight: '1px gray solid' , 
    //     height: '80%' , 
    //     display: 'flex' , 
    //     width: '100%' ,
    //     // justifyContent: 'center' , 
    //     alignItems: 'flex-end' ,

    // } ,

    // LineWraper: {
    //     display: 'flex' ,
    //     justifyContent: 'center' , 
    //     alignItems: 'center'
    // } ,
    
    // Line: {
    //     height: '100%' ,
    //     width: '5px' , 
    //     backgroundColor: 'red' , 
    //     borderRight: '10px'
    // }

    
}))

export default function RadioQuestion(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  let FormControlLabels = [];

  for (let item in Data.value) {
      FormControlLabels.push(
        <FormControlLabel value={Data.value[item]} 
        control={<Radio 
                classes={{colorPrimary: classes.Radio ,
                checked: classes.Radio}} 
                />} 
                    label={Data.value[item]} />
      )
  }


  return (
      <>

        <Typography className={classes.Root}>
            <div className={classes.NumberWraper}>
                <QNumber number={props.number} />
            </div>
            <div className={classes.Question}>
                <FormControl className={classes.FormControl} >
                        <FormLabel className={classes.Text} component="div">{Data.text}</FormLabel>
                            <RadioGroup  className={clsx({
                                                        [classes.RadioGroupRow]: Data.Horizontal,
                                                        })} 
                                        value={value} onChange={handleChange}>
                                        {FormControlLabels}
                                        <TextField 
                                            multiline={true}
                                            style={{marginTop: "20px"}}
                                            color="secondary" 
                                            variant="outlined" 
                                            label="سایر موارد"
                                            disabled={!(value === "سایر موارد")}/>
                            </RadioGroup>
                    </FormControl>
            </div>
        </Typography>













        {/* <Grid
        spacing={3}
        className={classes.Root}
        container
        direction="row"
        wrap="nowrap"
        >
            <Grid xs={1} className={classes.NumberWraper} container direction="column"  item>
                <Grid lx={2} item>
                    <QNumber number={props.number} />
                </Grid>
            </Grid>
            <Grid xs={12} style={{height: "100%"}}  item>
                <FormControl className={classes.FormControl} >
                    <FormLabel className={classes.Text} component="div">{Data.text}</FormLabel>
                        <RadioGroup  className={clsx({
                                                    [classes.RadioGroupRow]: Data.Horizontal,
                                                    })} 
                                    value={value} onChange={handleChange}>
                                    {FormControlLabels}
                                    <TextField 
                                        multiline={true}
                                        style={{marginTop: "20px"}}
                                        color="secondary" 
                                        variant="outlined" 
                                        label="سایر موارد"
                                        disabled={!(value === "سایر موارد")}/>
                        </RadioGroup>
                </FormControl>
            </Grid>
            
        </Grid>
         */}

        </>
        
  );
}
