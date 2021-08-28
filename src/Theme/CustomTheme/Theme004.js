import { green } from '@material-ui/core/colors';
import {createTheme} from '@material-ui/core/styles';
import IranSansFont from "../../fonts/assets/IRANSans.woff2"



const Iransans = {
  fontFamily: 'iransans',
  fontStyle: 'normal',
  fontWeight: 400,
  src: ` url(${IranSansFont}) format('woff2')  `,
};


export const theme004 = createTheme({
  palette: {
    background: {
      default: "#ECF8E2"
    } , 
      green: {
        // header color
        // main:"#1E5631"
        main: green[700]
        // main: red[900]
      } ,
      grey: {
        // side menu color
        main:"#1B291B", 
        // complementary color for theme using in question
          dark: green[100]
      } ,
      success: {
        // using in question number 
        // main: "#ECF8E2",
        main: green[900],
        // hover effect on profile Icon color
        dark: "#10A175" , 
        // BackgroundColor for submenu
        light: "#324232"
      } , 
      warning: {
        main: green[600],
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
      MuiRadio: {
        colorSecondary: {
          '&$checked': {
            color: "#1E5631",
          },
        },
      },

      MuiCheckbox: {
        colorSecondary: {
          "&$checked": {
            color: "#1E5631"
          }
        }
      } ,

      MuiFormControl: {
        root: {
          width: "100%"
        }
      }
    },
  });