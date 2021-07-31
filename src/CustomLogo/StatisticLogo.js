import React from 'react';
import classes from './StatisticLogo.module.css'
import StatisticLogo from '../assets/SvgLogo/StatisticIcon.svg';

const StatisticIcon = () => {
    return (
        <div className={classes.Image} >
             <img style={{fill: "green"}} src={StatisticLogo} alt="statistic-logo" />
        </div>
    )
}


export default StatisticIcon;