import React  from "react";
import { makeStyles } from "@material-ui/core";
import SplineChart from "./Charts/SplineChart";



const useStyle = makeStyles(theme => ({
    Root: {
        width: "100%" , 
        display: "flex" , 
        flexDirection: "column" , 
        flexWrap: "wrap" 
    } , 

    Chart: {
        backgroundColor: "white" , 
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px " , 
        borderRadius: "10px" , 
        margin: "10px" 
    } ,

    columnChart: {
        // maxWidth: columnChartMaxWidth ,
        height: "300px"
    } ,

    monoChromeChart: {
        height: "300px"
    }
}))
    // console.log("Here")
const DashboardPage = (props) => {

    const classes = useStyle();
    return (
            <div>
                <div className={classes.Chart}>
                    {/* <SplineChart /> */}

                    {/* <PopularAreaChart /> */}
                </div>
                {/* <div style={{display: "flex"}}>
                    <div className={clsx(classes.Chart , classes.columnChart)}>

                    <ColumnChart />
                    </div >
                    <div className={clsx(classes.Chart , classes.monoChromeChart)}>

                    <MonoChromeChart />
                    </div >
                </div> */}
            </div>
    )
}

export default DashboardPage;