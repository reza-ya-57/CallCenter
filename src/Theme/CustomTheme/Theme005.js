import {createTheme} from '@material-ui/core/styles';
// import IranSansttf from "../fonts/assets/Sahel-Black-FD.woff2";
import ShabnamFont from "../../fonts/assets/Shabnam.woff";
import IranSansFont from "../../fonts/assets/IRANSans.woff2"
import { purple, red } from '@material-ui/core/colors';


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


export const theme005 = createTheme({
  palette: {
      green: {
        // header color
        main:"#2E165B" 
      } ,
      grey: {
        // side menu color
        main:"#120632"
      } ,
      success: {
        // BackgroundColor
        main: "#DCD0D9" ,
        // hover effect on profile Icon color
        dark: "#980436" , 
        // BackgroundColor for submenu
        light: "#2E165B"
      } , 
      warning: {
        // Gradiant for SubHeader
        main: "#55003B" ,
        // hover color on sidebar menu
        dark: "#532D84" ,
      // selected item form sidemenu color
        light: "#8F329D"
      } 

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