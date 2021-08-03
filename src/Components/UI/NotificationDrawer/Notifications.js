import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
    root: {
        marginTop: "50px" ,
        display: "flex" , 
        flexDirection: "column" ,
    } ,
    Notif: {
        backgroundColor: theme.palette.warning.light,
        color: "white"  ,
        padding: "10px  10px",
        height: "100px" ,
        margin: "10px 8px" ,
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px "

    }
}))

const Notifications = (props) => {
    const classes = useStyle();
   return (
    <>
        <div className={classes.root}>
            <Paper className={classes.Notif}>
             <Typography>
             پیام شماره یک 
             </Typography>
            </Paper>
            <Paper className={classes.Notif}>
              <Typography>
              پیام شماره دو
              </Typography>
            </Paper>
        </div>
    </>
   )
}

export default Notifications;