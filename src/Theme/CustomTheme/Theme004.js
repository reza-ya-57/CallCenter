import {createTheme} from '@material-ui/core/styles';
// import IranSansttf from "../fonts/assets/Sahel-Black-FD.woff2";
import ShabnamFont from "../../fonts/assets/Shabnam.woff";
import IranSansFont from "../../fonts/assets/IRANSans.woff2"


 const Shabnam = {
  fontFamily: 'shabnam',
  fontStyle: 'normal',
  fontWeight: 400,
  src: ` url(${ShabnamFont}) format('woff')  `,
};

const Iransans = {
  fontFamily: 'iransans',
  fontStyle: 'normal',
  fontWeight: 400,
  src: ` url(${IranSansFont}) format('woff2')  `,
};


export const theme004 = createTheme({
  palette: {
      green: {
        main:"#0bb883"
        // main: red[900]
      } ,
      grey: {
        main:"#324232"
      } ,
      success: {
        main: "#fbf6f0"
      } , 
      warning: {
        main: "#0bb883"
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
      fontFamily: 'iransans, Arial',
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [Iransans],
        },
      },
    },
  });