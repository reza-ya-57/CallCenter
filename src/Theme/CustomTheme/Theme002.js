import { brown, green, pink, purple, red } from '@material-ui/core/colors';
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
    // header
    green: {
      main:"#000000"
    } ,
    // sidebar
    grey: {
      main:"#333333"
    } ,
    // background
    success: {
      main: "#ffffff"
    } , 
    warning: {
      main: "#f9f9f9"
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