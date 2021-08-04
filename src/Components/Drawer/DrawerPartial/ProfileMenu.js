// لوگو پروفایل در گوشه سمت چپ هدر قرار گرفته 
// شامل دراپ دون و لوگو

// PROFILE ICON WITH FROP DOWN 


import React from 'react';
import { withStyles , makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Avatar from '@material-ui/core/Avatar';
import AvatarPicture from '../../../assets/Images/rezayari.jfif'


const useStyle = makeStyles(theme => ({
    CircleIcon: {
      width: "40px" ,
      height: "40px" ,
      borderRadius: "100%" ,
      padding: "3px" ,
      cursor: "pointer" , 
      "&:hover": {
        transform: "scale(1.02)" ,
        backgroundColor: theme.palette.success.dark ,
        opacity: "0.9" ,
        
      }

    }
}))

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:hover': {
      backgroundColor: theme.palette.green.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
    ProfileIconWraper: {
      '&:hover': {
        backgroundColor: "red"
      }
    }
  },
}))(MenuItem);

export default function ProfileMenu() {
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const ClickOnSubMenuHandler = () => {
    console.log("hey")
    setAnchorEl(null);
  }

  return (
    <div>
      <div className={classes.ProfileIconWraper}>
      <AccountCircleIcon
        className={classes.CircleIcon}
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="white"
        onClick={handleClick}
       />
       {/* <Avatar
        className={classes.CircleIcon}
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="white"
        onClick={handleClick}
       alt="Remy Sharp" src={AvatarPicture} /> */}
      </div>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={ClickOnSubMenuHandler}>
          <ListItemIcon>
            <PersonOutlineIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="پروفایل" />
        </StyledMenuItem>

        <StyledMenuItem onClick={ClickOnSubMenuHandler}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="تنظیمات" />
        </StyledMenuItem>

        <StyledMenuItem onClick={ClickOnSubMenuHandler}>
          <ListItemIcon>
            <ExitToAppIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="خروج" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
