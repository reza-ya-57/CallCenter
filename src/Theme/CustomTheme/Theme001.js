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
      secondary: {
        main: purple[500] 
      } , 
      primary: {
          main: green[500]
      }   ,
      success: {
        main: pink[200]
      }
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