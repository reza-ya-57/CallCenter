import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
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
import companyLogo from '../assets/Images/QBLogo.svg'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  ListItem: {
    '&:hover': {
      backgroundColor: "#ff5722" , 
      transform: "scale(1.02)" , 
      color: "white"
    }
  } ,
  appbar: {
    backgroundColor: "#e65100"
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
  

}));

export default function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [menuItem , setmenuItem] = React.useState([
    {
      id: 1 ,
      text: "داشبورد" ,
      Icon: <DashboardIcon /> , 
      collapse: false ,
      subMenu: {
        
      }
    } ,
    {
      id: 2 ,
      text: "آمار" ,
      Icon: <DraftsIcon /> , 
      collapse: true ,
      in: false ,
      subMenu: [
        {
          text: "تاریخچه تماس" ,
          Icon : <StarBorder />
        } ,
        {
          text: "تاریخچه تماس" ,
          Icon : <StarBorder />
        }
      ]
    }
  ])


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
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar 
            className={classes.appbar}>
          <IconButton
            color="inherit"
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
            شرکت بهنیه سازان کیفیت
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
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <div className={classes.companyLogoWraperDiv}>
          <img src={companyLogo} className={classes.companyLogo} />
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />

        <Divider />

          <List>
            {/* Looping through menuItem for building ListItem */}
            {menuItem.map((item , index) => {
              return (
                <>
                <ListItem className={classes.ListItem} key={item.id} button onClick={(e) => handleClick(e , item.id)}>
              <ListItemIcon>
                {item.Icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
              {item.collapse ? (item.in ? <ExpandLess /> : <ExpandMore />) : null}
              </ListItem>
              {/* Check if menuItems have collapse for subMenu */}
                {item.collapse ? 
                      // Looping through subMenu of menuItem for generating subMenu
                      item.subMenu.map((collapseItem , index) => {
                        return (
                          <Collapse className={classes.ListItem}  in={item.in} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                              <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                  {collapseItem.Icon}
                                </ListItemIcon>
                                <ListItemText primary={collapseItem.text} />
                              </ListItem>
                            </List>
                        </Collapse>
                        )
                      })
                : null}
                </>
              )
            })}
          </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}
