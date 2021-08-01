import React from "react";
import AreaChart from "./Charts/AreaChart";
import ColumnChart from "./Charts/ColumnChart";


const DashboardPage = (props) => {
    return (
        <>  
            <div style={{backgroundColor: "white" , boxShadow: "1px 1px 5px 1px " , borderRadius: "5px" }}>
                <ColumnChart />
            </div>
            {/* <div style={{width: "500px"}}>
            <AreaChart />
            </div> */}
        </>
    )
}

export default DashboardPage;