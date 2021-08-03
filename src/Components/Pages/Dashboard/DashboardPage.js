import React , {useState , useSelector} from "react";
import AreaChart from "./Charts/AreaChart";
import ColumnChart from "./Charts/ColumnChart";
import PopularAreaChart from "./Charts/PopularArea";
import SplineChart from "./Charts/SplineChart";
import MonoChromeChart from "./Charts/MonoChromeChart";

const DashboardPage = (props) => {
    
    return (
            <div style={{width: "100%" , display: "flex" , flexDirection: "column" , flexWrap: "wrap"}}>
                <div style={{backgroundColor: "white" , boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px " , borderRadius: "10px" , margin: "0px 10px"   }}>
                    <SplineChart />
                    {/* <PopularAreaChart /> */}
                </div>
                    <div style={{display: "flex"}}>
                        <div style={{backgroundColor: "white" , boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px " , borderRadius: "10px"  , width: "70%" , margin: "10px"  }}>

                        <ColumnChart />
                        </div >
                        <div style={{backgroundColor: "white" , boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px " , borderRadius: "10px"  , width: "30%" , margin: "10px"  }}>

                        <MonoChromeChart />
                        </div >
                </div>
            </div>
    )
}

export default DashboardPage;