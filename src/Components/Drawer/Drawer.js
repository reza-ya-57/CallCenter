

//  ader and SideMenu
// این قسمت تمام صفحات برنامه رو در داخل خود قرار میدهد  
// صفحات برنامه از داخل این برنامه رندر میشوند


import React , {useState} from 'react';
import { useHistory } from 'react-router';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { useDispatch } from 'react-redux';
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
import companyLogo from '../../assets/Images/logo-behine22.png';
// import companyLogo from '../../assets/Images/QBLogo.svg'

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { NavLink } from 'react-router-dom';
import CallIcon from '@material-ui/icons/Call';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import ProfileMenu from './DrawerPartial/ProfileMenu';
import NotificationDrawer from '../Drawer/DrawerPartial/NotificationDrawer/NotificationDrawer';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  
  ListItemSelected: {
    backgroundColor: theme.palette.warning.light ,
    // transform: "scale(1.04)" ,
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
  nested: {
    backgroundColor: theme.palette.success.light
  } ,
  content: {
    // flexGrow: 1 ,
    width: "100%" ,
    // position: "relative" , 
    // width: "100%" ,
    // height: "100%" ,
    // backgroundColor: theme.palette.success.main,
    // padding: theme.spacing(3),
  },
  ListItem: {
    color: "white" ,
    '&:hover': {
      backgroundColor: theme.palette.warning.dark , 
      // transform: "scale(1.02)" , 
      color: "white"
    },
  } ,

  ListItemHover: {
    color: "white" ,
    '&:hover': {
      backgroundColor: theme.palette.warning.light , 
      // transform: "scale(1.02)" , 
      color: "white"
    },
  } ,

  appbar: {
    color: "white" ,
    backgroundColor: theme.palette.green.main
  } , 

  companyLogoWraperDiv: {
    display: "flex" , 
    alignItems: "center" , 
    justifyContent: "center" ,
    borderRadius: "100px" ,
    marginRight: "30px"
  } ,
  companyLogo: {
    width: "70px" , 
    height: "60px"  ,
    borderRadius: "100px" ,
  } ,
  NavLink : {
    textDecoration: "none" ,
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

  title: {
    flexGrow: 1,
  },
  FillGap: {
    backgroundColor: "green",
    flexGrow: 1 ,
  } ,
  DividerStyle: {
    backgroundColor: "#676767"
  } , 
  SubMenulistItemText: {
    fontSize: "12px" , 
    fontWeight: "0"
  } , 
   
  SubMenulistItemTextSelected: {
    backgroundColor: theme.palette.warning.light ,
    // transform: "scale(1.04)" ,
  } ,

  SubMenuStyle: {
    fontSize: "10px" ,
    position: "relative" , 
    left: "20px" , 
    marginRight: "10px" , 
    color: "white"
  } , 
  
  

}));


 function MiniDrawer(props) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [HeaderMessage , setHeaderMessage] = useState("");

 

  // SideMenu information
  // Main state define here For looping through
  const [menuItem , setmenuItem] = React.useState([
    {
      id: 1 ,
      text: "خانه" ,
      Icon: <HomeIcon style={{ color: "white" }} /> , 
      path : "/" ,
      // True if menu item has a submenu
      collapse: false ,
      // True when Click on the itemList and attatch a className to item for change backgroundColor
      selected: false ,
      // Content of submenu
      subMenu: {
        
      } 
    },
    
    {
      id: 2 ,
      text: "داشبورد" ,
      Icon: <DashboardIcon style={{ color: "white" }} /> , 
      path : "/dashboard" ,
      collapse: false ,
      selected: false ,
      subMenu: {
        
      }
    } ,

    {
      id: 3 ,
      text: "تماس" ,
      Icon: <CallIcon style={{ color: "white" }}/> , 
      path : "/call" ,
      collapse: false ,
      selected: false ,
      subMenu: {
        
      }
    } ,

    {
      id: 4 ,
      text: "آمار" ,
      Icon: <TrendingUpIcon style={{color: "white"}} /> ,
      path: null ,
      collapse: true ,
      selected: false ,
      in: false ,
        subMenu: [
          {
            id: 101 ,
            text: "نمونه یک" ,
            subSelected: false ,
            Icon : <StarBorder className={classes.SubMenuStyle} /> ,
            path: "/dashboard"
          } ,
          {
            id: 102 ,
            text: "نمونه دو" ,
            subSelected: false ,
            Icon : <StarBorder className={classes.SubMenuStyle}/> ,
            path: "/call"
          } ,
          {
            id: 103 ,
            text: "نمونه سه" ,
            subSelected: false ,
            Icon : <StarBorder className={classes.SubMenuStyle}/> ,
            path: "/call"
          }
        ]
    } , 
    {
      id: 5 ,
      text: "تنظیمات" ,
      Icon: <SettingsIcon style={{ color: "white" }}/> , 
      path : "/setting" ,
      collapse: false ,
      selected: false ,
    } ,

  ])

  // Look at current path and change subHeaderMessage dynamically
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
    dispatch({type:"rerender"})
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    let UpdatemenuItem = menuItem.slice();
    UpdatemenuItem.forEach((item , index) => {
      item.in = false;
    })
  };


  // CLICK ON MENUITEM WITH SUBMENU AND TOGGLE SUBMENU OPEN OR CLOSE
  // AND ALSO LOOPING THROUTH MENUITEM STATE AND TURN SELECTED OF ITEM TRUE
  // AND ALL OTHERS SELECTED ATTRIBUTE FALSE
  const handleClick = ( e , Id ) => {
    let UpdatemenuItem = menuItem.slice()
    UpdatemenuItem.forEach((item , index) => {
        item.selected = false;
        if (item.collapse) {
          item.subMenu.forEach((item , index) => {
            item.subSelected = false
          })
        }
      if (item.id === Id) {
        item.in = !item.in 
        item.selected = true
      }
      setmenuItem([
        ...UpdatemenuItem
      ])
    })
  }

  // DO THE SAME THING AS FUNCTION ABOVE BUT DO IT FOR SUBMENU ITEM
  const SubmenuHandleClick = (e , Id) => {

    let UpdatemenuItem = menuItem.slice()
    UpdatemenuItem.forEach((item , index) => {
        item.selected = false;
        if (item.collapse) {
          item.subMenu.forEach((item , index) => {
            item.subSelected = false
            if (item.id === Id) {
              item.subSelected = true
            }
          })
        }
      if (item.id === Id) {
        item.in = !item.in 
        item.selected = true
      }
      setmenuItem([
        ...UpdatemenuItem
      ])
    })
}



  // DRAWER START HERE
  return (
      <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{color: "white"}} 
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
          <div className={classes.profileContainer} style={{ display: "flex" , width: "120px" , justifyContent: "space-around" }}>
            {/* COMPONENT FOR NOTIFICATION ICON AND SIDDRAER NOTIFICTION */}
            <NotificationDrawer />
            {/* COMPONENT FOR PROFILE ICON AND SUBMENU FUNCTIONALITY FOR DROPDOWN WHEN CLICK ON ICON */}
            <ProfileMenu />
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
          <img src={companyLogo} alt='companylogo' className={classes.companyLogo} />
          </div>
          {/* ARROW BUTTON FOR CLOSING DRAWER WHEN IT IS OPEN */}
          <IconButton style={{color: "white"}}  onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>

          <List style={{padding: "0px"}}>
          
           {/* Looping through menuItem for building ListItem */}
            {menuItem.map((item , index) => {
              return (
                <div key={item.id}>
                <Divider className={classes.DividerStyle} />
                { item.path ? (
                    <NavLink className={classes.NavLink} to={item.path} >
                    <ListItem className={clsx({
                      [classes.ListItem]: true ,
                      [classes.ListItemSelected]: item.selected , 
                      [classes.ListItemHover]: item.selected
                    })} button onClick={(e) => handleClick(e , item.id)}>
                        <ListItemIcon>
                          {item.Icon}
                        </ListItemIcon>
                      <ListItemText primary={item.text} />
                    {item.collapse ? (item.in ? <ExpandLess /> : <ExpandMore />) : null}
                  </ListItem>
                  </NavLink>
                ) : (
                 <div key={item.id + 200}>
                    <ListItem className={classes.ListItem} button onClick={(e) => handleClick(e , item.id)}>
                      <ListItemIcon>
                        {item.Icon}
                      </ListItemIcon>
                    <ListItemText primary={item.text} />
                  {item.collapse ? (item.in ? <ExpandLess /> : <ExpandMore />) : null}
                </ListItem>
                    
                  </div>
                )}
                 {/* Check if menuItems have collapse for subMenu */}
                {item.collapse ? 
                      // Looping through subMenu of menuItem for generating subMenu
                      item.subMenu.map((collapseItem , index) => {

                        return (
                         <div key={collapseItem.id}>
                          <Collapse className={classes.ListItem}  in={item.in} timeout="auto" unmountOnExit>
                            <Divider className={classes.DividerStyle} />
                            <List component="div" disablePadding>
                              {collapseItem.path ? (
                                <NavLink className={classes.NavLink} to={collapseItem.path}>
                                  <ListItem style={{color:"white"}} button className={clsx({
                                  [classes.nested]: true ,
                                  [classes.SubMenulistItemTextSelected]: collapseItem.subSelected, 
                                  [classes.ListItemHover]: collapseItem.subSelected
                                })} onClick={(e) => SubmenuHandleClick(e , collapseItem.id)}>
                                    <ListItemIcon>
                                      {collapseItem.Icon}
                                    </ListItemIcon>
                                    <ListItemText classes={{primary:classes.SubMenulistItemText}} primary={collapseItem.text} />
                                  </ListItem> 
                                </NavLink>
                              ): null}
                            </List>
                          </Collapse>
                         </div>
                        )
                      })
                : null}
                </div>
              )
            })}
            <Divider className={classes.DividerStyle} />


          </List>
      </Drawer>
        <main  className={classes.content}>
            {/* THIS DIV LIE UNDER THE APPBAR (SUBHEADER) AND PREVENT CONTENT TO GO UNDER THE APPBAR  */}
            <div style={{backgroundColor: "green" ,width: "100%" , height: "64px"}}></div>
            {/* SUBHEADER FOR SHOW PAGE NAME UNDER THE MAIN HEADER */}
            <nav className={classes.subHeader}>
              {/* TEXT THAT SHOW IN SUBHEADER */}
              <div className={classes.SubmenuText}>
                {/* THIS MESSAGE DYNAMICALLY CHANGE WHEN CURRENT PATH CHANGE */}
                {HeaderMessage}
              </div>
            </nav>
            <div>
            {props.children}
            </div>
       </main>
       </div>
  );
}


export default MiniDrawer;


            // {/* Looping through menuItem for building ListItem */}
            // {menuItem.map((item , index) => {
            //   return (
            //     <div>
            //     <Divider key={(item.id + 200)} className={classes.DividerStyle} />
            //     { item.path ? (
            //         <NavLink key={(item.id + 300)} className={classes.NavLink} to={item.path} >
            //         <ListItem className={clsx({
            //           [classes.ListItem]: true ,
            //           [classes.ListItemSelected]: item.selected , 
            //           [classes.ListItemHover]: item.selected
            //         })} key={item.id + 400} button onClick={(e) => handleClick(e , item.id)}>
            //             <ListItemIcon>
            //               {item.Icon}
            //             </ListItemIcon>
            //           <ListItemText primary={item.text} />
            //         {item.collapse ? (item.in ? <ExpandLess /> : <ExpandMore />) : null}
            //       </ListItem>
            //       </NavLink>
            //     ) : (
            //       <ListItem className={classes.ListItem} key={(item.id + 500)} button onClick={(e) => handleClick(e , item.id)}>
            //           <ListItemIcon>
            //             {item.Icon}
            //           </ListItemIcon>
            //         <ListItemText primary={item.text} />
            //       {item.collapse ? (item.in ? <ExpandLess /> : <ExpandMore />) : null}
            //     </ListItem>
            //     )}
            //   {/* Check if menuItems have collapse for subMenu */}
            //     {item.collapse ? 
            //           // Looping through subMenu of menuItem for generating subMenu
            //           item.subMenu.map((collapseItem , index) => {

            //             return (
            //              <div>
            //               <Collapse key={collapseItem.id + 600} className={classes.ListItem}  in={item.in} timeout="auto" unmountOnExit>
            //                 <Divider className={classes.DividerStyle} />
            //                 <List component="div" disablePadding>
            //                   {collapseItem.path ? (
            //                     <NavLink key={(collapseItem.id + 700)} className={classes.NavLink} to={collapseItem.path}>
            //                       <ListItem style={{color:"white"}} button className={clsx({
            //                       [classes.nested]: true ,
            //                       [classes.SubMenulistItemTextSelected]: collapseItem.subSelected, 
            //                       [classes.ListItemHover]: collapseItem.subSelected
            //                     })} onClick={(e) => SubmenuHandleClick(e , collapseItem.id)}>
            //                         <ListItemIcon>
            //                           {collapseItem.Icon}
            //                         </ListItemIcon>
            //                         <ListItemText classes={{primary:classes.SubMenulistItemText}} primary={collapseItem.text} />
            //                       </ListItem> 
            //                     </NavLink>
            //                   ): (
            //                     <ListItem style={{color:"white"}}  button className={clsx({
            //                       [classes.nested]: true ,
            //                       [classes.SubMenulistItemTextSelected]: collapseItem.subSelected, 
            //                       [classes.ListItemHover]: collapseItem.subSelected
            //                     })} onClick={(e) => SubmenuHandleClick(e , collapseItem.id)}>
            //                     <ListItemIcon>
            //                       {collapseItem.Icon}
            //                     </ListItemIcon>
            //                     <ListItemText classes={{primary:classes.SubMenulistItemText}} primary={collapseItem.text} />
            //                   </ListItem>
            //                   )}
            //                 </List>
            //               </Collapse>
            //              </div>
            //             )
            //           })
            //     : null}
            //     </div>
            //   )
            // })}
            // <Divider className={classes.DividerStyle} />