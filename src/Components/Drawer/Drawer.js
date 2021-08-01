import React , {useState} from 'react';
import { useHistory } from 'react-router';
import clsx from 'clsx';
import { makeStyles, useTheme  } from '@material-ui/core/styles';
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
import companyLogo from '../../assets/Images/QBLogo.svg'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { NavLink } from 'react-router-dom';
import CallIcon from '@material-ui/icons/Call';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SettingsIcon from '@material-ui/icons/Settings';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';

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
    backgroundImage:" linear-gradient(120deg, " + `${theme.palette.green.main}` + " , #131628 )" ,
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    position: "relative" , 
    height: "100vh" ,
    flexGrow: 1,
    backgroundColor: theme.palette.success.main,
    // padding: theme.spacing(3),
    padding: "0px"
  },
  ListItem: {
    color: "white" ,
    '&:hover': {
      backgroundColor: theme.palette.green.main , 
      // backgroundColor: theme.palette.secondary.main, 
      transform: "scale(1.02)" , 
      color: "white"
    }
  } ,
  appbar: {
    color: "white" ,
    // backgroundColor: "#e65100"
    // backgroundColor: "#ab003c"
    backgroundColor: theme.palette.green.main
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
  SidebarContainer: {
    backgroundColor: theme.palette.grey.main  ,
  } , 
  subHeader: { 
    background: "linear-gradient(90deg," + `${theme.palette.green.main}` +" 0%, " + `${theme.palette.warning.main}` +" 35%, #000000 100%)" ,
    color: "white" ,
    zIndex: theme.zIndex.drawer + 1,
    display: "flex" ,
    borderRadius: "0px 0px 50px 0px" ,
    // border: "1px black solid"  ,
    boxShadow: "1px 1px 4px 1px black" ,
    height: "50px"
  } ,

  SubmenuText: {
    padding: "10px 20px" , 
    fontSize: "20px"
  } ,

  profileContainer: {
    width: "20px",
    marginRight: "20px"
  }, 
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  title: {
    flexGrow: 1,
  },
  FillGap: {
    backgroundColor: "green",
    flexGrow: 1 ,
  } ,
  appBarArow: {
    backgroundColor: "red" ,
    color: "red"
  }

}));


 function MiniDrawer(props) {
  const classes = useStyles();
  const history = useHistory();
  const state = useSelector(state => state.theme);
  const theme = useTheme();
  console.log(theme)
  const [open, setOpen] = React.useState(false);
  const [HeaderMessage , setHeaderMessage] = useState("");

  const [anchorEl, setAnchorEl] = useState(null);
  const [ProfileDetailIcon , setProfileDetailIcon] = useState(false)
 
  const [menuItem , setmenuItem] = React.useState([
    {
      id: 1 ,
      text: "خانه" ,
      Icon: <HomeIcon style={{ color: "white" }} /> , 
      path : "/" ,
      collapse: false ,
      subMenu: {
        
      } 
    },
    {
      id: 2 ,
      text: "داشبورد" ,
      Icon: <DashboardIcon style={{ color: "white" }} /> , 
      path : "/dashboard" ,
      collapse: false ,
      subMenu: {
        
      }
    } ,

    {
      id: 3 ,
      text: "تماس" ,
      Icon: <CallIcon style={{ color: "white" }}/> , 
      path : "/call" ,
      collapse: false ,
      subMenu: {
        
      }
    } ,

    {
      id: 4 ,
      text: "آمار" ,
      Icon: <TrendingUpIcon style={{color: "white"}} /> ,
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
      id: 5 ,
      text: "تنظیمات" ,
      Icon: <SettingsIcon style={{ color: "white" }}/> , 
      path : "/setting" ,
      collapse: false ,
    } ,

  ])

  if (history.location.pathname === "/dashboard" && HeaderMessage !== "داشبورد") {
    setHeaderMessage("داشبورد")
  }
  else if (history.location.pathname === "/call" && HeaderMessage !== "تماس ها") {
    setHeaderMessage("تماس ها")
  }
  else if (history.location.pathname === "/setting" && HeaderMessage !== "تنظیمات") {
    setHeaderMessage("تنظیمات")
  }
  else if (history.location.pathname === "/" && HeaderMessage !== "خانه") {
    setHeaderMessage("خانه")
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

  // FUNCTION HANDLER
  const handleCloseProfileDetail = () => {
    setProfileDetailIcon(true)
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget); 
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setProfileDetailIcon(false)
    setAnchorEl(<div></div>);
  };


  // DRAWER START HERE

  return (
      <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{color: "white"}}
        classes={{root: "appBarArow"}}  
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.appbar}>
          {/* HAMBURGER MENU ICON */}
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            
            <MenuIcon style={{color: "white"  }} />
          </IconButton>
          <Typography variant="h6" noWrap>
            شرکت بهینه کاوان کیفیت
          </Typography>
            <div className={classes.FillGap}></div>
         <div className={classes.profileContainer}>
         <div onClick={handleCloseProfileDetail}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={ProfileDetailIcon}
                onClose={handleClose}
                onClick={handleCloseProfileDetail}
              >
                
                <MenuItem onClick={handleClose}>علیرضا تیلکو</MenuItem>
                <MenuItem onClick={handleClose}>خروج</MenuItem>
              </Menu>
            </div>
         </div>
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
            [classes.SidebarContainer]: true ,
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar} >
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
      <div style={{backgroundColor: "green" ,width: "100%" , height: "64px"}}></div>
      <nav className={classes.subHeader}>
        <div className={classes.SubmenuText}>
          {HeaderMessage}
        </div>
      </nav>
        {/* <div style={{backgroundColor: "blue" , width: "100%" , margin: "0px"}} className={classes.toolbar} /> */}
        {/* <div className={classes.subHeader}>hello</div> */}
        {/* <ListSubheader style={{backgroundColor: "red"}} title="hello">
          hello
        </ListSubheader> */}
        <div style={{padding: "20px"}}>
        {props.children}
        </div>
        
      </main>
       </div>
    // </ThemeProvider>
  );
}


export default MiniDrawer;