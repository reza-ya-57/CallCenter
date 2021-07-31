import React from 'react';
import clsx from 'clsx';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles, useTheme , withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'; 
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DraftsIcon from '@material-ui/icons/Drafts';
import companyLogo from '../../assets/Images/QBLogo.svg'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { NavLink } from 'react-router-dom';
import CallIcon from '@material-ui/icons/Call';
import StatisticLogo  from '../../CustomLogo/StatisticLogo';
import CustomThemeProvider from '../../Theme/CustomTheme/ThemeProvider';
import {theme001} from '../../Theme/CustomTheme/Theme001';
import { theme002 } from '../../Theme/CustomTheme/Theme002';
import SettingsIcon from '@material-ui/icons/Settings';

import { CardHeader } from '@material-ui/core';
import { ListSubheader } from '@material-ui/core';

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {  
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    position: "relative" ,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    backgroundColor: "gray",
    position: "relative" , 
    height: "100vh" ,
    flexGrow: 1,
    // padding: theme.spacing(3),
    padding: "0px"
  },
  ListItem: {
    color: "white" ,
    '&:hover': {
      backgroundColor: "#ab003c" , 
      // backgroundColor: theme.palette.secondary.main, 
      transform: "scale(1.02)" , 
      color: "white"
    }
  } ,
  appbar: {
    color: "white" ,
    // backgroundColor: "#e65100"
    backgroundColor: "#ab003c"
    // backgroundColor: theme.palette.success.main
  } , 

  companyLogoWraperDiv: {
    display: "flex" , 
    alignItems: "center" , 
    justifyContent: "center" ,
    borderRadius: "100px" ,
    marginRight: "50px"
  } ,
  companyLogo: {
    width: "50px" , 
    height: "50px"  ,
    borderRadius: "100px" ,
  } ,
  NavLink : {
    textDecoration: "none" , 
    color : "black"
  } , 
  paper: {
    backgroundColor: "blue"
  }  , 
  orange: {
    backgroundColor: "#131628" ,
  } , 
  subHeader: {
    marginTop: "64px" ,
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "red" , 
    borderRadius: "25px" ,
    height: "100px"
  }

}));

 function MiniDrawer(props) {
  const classes = useStyles();
  const state = useSelector(state => state.theme);
  const theme = useTheme();
  console.log(theme)
  const [open, setOpen] = React.useState(false);
  const [Theme , setTheme] = React.useState("firsttheme")
  console.log(state)

 
  const [menuItem , setmenuItem] = React.useState([
    {
      id: 1 ,
      text: "داشبورد" ,
      Icon: <DashboardIcon style={{ color: "white" }} /> , 
      path : "/dashboard" ,
      collapse: false ,
      subMenu: {
        
      }
    } ,

    {
      id: 2 ,
      text: "تماس" ,
      Icon: <CallIcon style={{ color: "white" }}/> , 
      path : "/call" ,
      collapse: false ,
      subMenu: {
        
      }
    } ,

    {
      id: 3 ,
      text: "آمار" ,
      Icon: <StarBorder style={{ color: "white" }}/> ,
      linkTo: null ,
      collapse: true ,
      in: false ,
        subMenu: [
          {
            text: "تاریخچه تماس" ,
            Icon : <StarBorder style={{ color: "white" }}/> ,
            path: "/dashboard"
          } ,
          {
            text: "تاریخچه تماس" ,
            Icon : <StarBorder style={{ color: "white" }}/> ,
            path: null
          }
        ]
    } , 
    {
      id: 4 ,
      text: "تنظیمات" ,
      Icon: <SettingsIcon style={{ color: "white" }}/> , 
      path : "/setting" ,
      collapse: false ,
    } ,

  ])

  let customTheme = theme001;
  if (Theme === "secondtheme") {
    customTheme = theme002;
  }
  if (Theme === "firsttheme") {
    customTheme = theme001
  }
  
  const themeHandler = () => {
    if (Theme === "firsttheme") {
      setTheme("secondtheme")
    }else if (Theme == "secondtheme") {
      setTheme("firsttheme")
    }
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = ( e , Id ) => {
    let UpdatemenuItem = menuItem.slice()
    UpdatemenuItem.forEach((item , index) => {
      if (item.id === Id) {
        item.in = !item.in 
      }
      setmenuItem([
        ...UpdatemenuItem
      ])
    })
  }


  // DRAWER START HERE

  return (
    // <ThemeProvider theme={theme001}>
      <div className={classes.root}>
      <CssBaseline />
      <AppBar
        // style={{backgroundColor: state.customTheme.primary}}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar 
            className={classes.appbar}>
          <IconButton
            style={{color: "white"}}
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            شرکت بهینه کاوان کیفیت
          </Typography>
          
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}

        classes={{
          paper: clsx({
            [classes.orange]: true ,
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar} style={{backgroundImage:" linear-gradient(120deg, #ab003c , #131628)"}}>
          <div className={classes.companyLogoWraperDiv}>
          <img src={companyLogo} className={classes.companyLogo} />
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>

          <List style={{padding: "0px"}}>
            {/* Looping through menuItem for building ListItem */}
            {menuItem.map((item , index) => {
              return (
                <div>
                <Divider />
                { item.path ? (
                    <NavLink className={classes.NavLink} to={item.path} >
                    <ListItem className={classes.ListItem} key={item.id} button onClick={(e) => handleClick(e , item.id)}>
                        <ListItemIcon>
                          {item.Icon}
                        </ListItemIcon>
                      <ListItemText primary={item.text} />
                    {item.collapse ? (item.in ? <ExpandLess /> : <ExpandMore />) : null}
                  </ListItem>
                  </NavLink>
                ) : (
                  <ListItem className={classes.ListItem} key={item.id} button onClick={(e) => handleClick(e , item.id)}>
                      <ListItemIcon>
                        {item.Icon}
                      </ListItemIcon>
                    <ListItemText primary={item.text} />
                  {item.collapse ? (item.in ? <ExpandLess /> : <ExpandMore />) : null}
                </ListItem>
                )}
              {/* Check if menuItems have collapse for subMenu */}
                {item.collapse ? 
                      // Looping through subMenu of menuItem for generating subMenu
                      item.subMenu.map((collapseItem , index) => {
                        return (
                         <div>
                          <Collapse className={classes.ListItem}  in={item.in} timeout="auto" unmountOnExit>
                            <Divider />
                            <List component="div" disablePadding>
                              {collapseItem.path ? (
                                <NavLink className={classes.NavLink} to={collapseItem.path}>
                                  <ListItem style={{color:"white"}} button className={classes.nested}>
                                    <ListItemIcon>
                                      {collapseItem.Icon}
                                    </ListItemIcon>
                                    <ListItemText primary={collapseItem.text} />
                                  </ListItem> 
                                </NavLink>
                              ): (
                                <ListItem style={{color:"white"}} button className={classes.nested}>
                                <ListItemIcon>
                                  {collapseItem.Icon}
                                </ListItemIcon>
                                <ListItemText primary={collapseItem.text} />
                              </ListItem>
                              )}
                            </List>
                          </Collapse>
                        <Divider />
                         </div>
                        )
                      })
                : null}
                </div>
              )
            })}
          </List>
      </Drawer>
        <main  className={classes.content}>
        {/* <div style={{backgroundColor: "blue" , width: "100%" , margin: "0px"}} className={classes.toolbar} /> */}
        {/* <div className={classes.subHeader}>hello</div> */}
        {/* <ListSubheader style={{backgroundColor: "red"}} title="hello">
          hello
        </ListSubheader> */}
        
        {props.children}
      </main>
       </div>
    // </ThemeProvider>
  );
}


export default MiniDrawer;