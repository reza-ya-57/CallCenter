import {createTheme} from '@material-ui/core/styles';
import ShabnamFont from "../../fonts/assets/Shabnam.woff";
import IranSansFont from "../../fonts/assets/IRANSans.woff2"


 const Iransans = {
  fontFamily: 'iransans',
  fontStyle: 'normal',
  fontWeight: 400,
  src: ` url(${IranSansFont}) format('woff2')  `,
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