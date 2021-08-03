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
        // header color
        main:"#1E5631"
        // main: red[900]
      } ,
      grey: {
        // side menu color
        main:"#1B291B"
      } ,
      success: {
        // BackgroundColor
        main: "#ECF8E2",
        // hover effect on profile Icon color
        dark: "#10A175" , 
        // BackgroundColor for submenu
        light: "#324232"
      } , 
      warning: {
        main: "#0bb883",
        // hover color on sidebar menu
        dark: "#8B9A96" ,
      // selected item form sidemenu color
        light: "#038764"
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