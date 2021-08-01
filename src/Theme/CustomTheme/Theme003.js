import { brown, green, pink, purple, red } from '@material-ui/core/colors';
import {createTheme} from '@material-ui/core/styles';
import ShabnamFont from "../../fonts/assets/Shabnam.woff";


 const Shabnam = {
  fontFamily: 'shabnam',
  fontStyle: 'normal',
  fontWeight: 400,
  src: ` url(${ShabnamFont}) format('woff')  `,
};


export const theme003 = createTheme({
  palette: {
    green: {
      main: "#242e5f"
    } ,
    grey: {
      main: "#444674"
    } ,
    success: {
        main: "#f5f3f5"
    } , 
    warning: {
        main: "#242e5f"
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