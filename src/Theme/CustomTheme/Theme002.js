import { blue } from '@material-ui/core/colors';
import {createTheme} from '@material-ui/core/styles';
import ShabnamFont from "../../fonts/assets/Shabnam.woff";


 const Shabnam = {
  fontFamily: 'shabnam',
  fontStyle: 'normal',
  fontWeight: 400,
  src: ` url(${ShabnamFont}) format('woff')  `,
};


export const theme002 = createTheme({
  palette: {
    // header color
    green: {
      main:"#000000"
    } ,
    // side menu color
    grey: {
      main: "#1E1B1B"
    } ,
    // BackgroundColor
    success: {
      main: "#ffffff",
      // hover effect on profile Icon color
      dark: "#302222" , 
      // BackgroundColor for submenu
      light: "#333333"
    } , 
    warning: {
      // Gradiant for SubHeader
      main: "#f9f9f9" ,
      // hover color on sidebar menu
      dark: "#BE4147" , 
      // selected item form sidemenu color
      light: "#9B0007"
    }
    // secondary: {
    //   main: purple[500] 
    // } , 
    // primary: {
    //     main: red[500]
    // }   ,
    // success: {
    //   main: "#ab003c"
    // } , 

  } ,
    direction: 'rtl',
    typography: {
      fontFamily: 'shabnam, Arial',
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [Shabnam],
        },
      },
    },
  });