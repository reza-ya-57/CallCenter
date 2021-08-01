import { green, pink, purple, red, yellow } from '@material-ui/core/colors';
import {createTheme} from '@material-ui/core/styles';
// import IranSansttf from "../fonts/assets/Sahel-Black-FD.woff2";
import ShabnamFont from "../../fonts/assets/Shabnam.woff";


 const Shabnam = {
  fontFamily: 'shabnam',
  fontStyle: 'normal',
  fontWeight: 400,
  src: ` url(${ShabnamFont}) format('woff')  `,
};


export const theme001 = createTheme({
  palette: {
      green: {
        main:"#ab003c"
        // main: red[900]
      } ,
      grey: {
        main:"#131628"
      } ,
      success: {
        main: "#DBE9F4"
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