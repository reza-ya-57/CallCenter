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
      // header color
      main: "#242e5f"
    } ,
    grey: {
      // side menu color
      main: "#030421"
    } ,
    success: {
      // BackgroundColor
        main: "#f5f3f5" ,
        // hover effect on profile Icon color
        dark: "#1A234F" ,
        // BackgroundColor for submenu
        light: "#2F3249"
    } , 
    warning: {
      // Gradiant for SubHeader
        main: "#242e5f",
        // hover color on sidebar menu
        dark: "#444674" ,
      // selected item form sidemenu color
        light: "#030ECC"
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