import { red } from '@material-ui/core/colors';
import {createTheme} from '@material-ui/core/styles';
import IranSansFont from "../../fonts/assets/IRANSans.woff2"


const Iransans = {
  fontFamily: 'iransans',
  fontStyle: 'normal',
  fontWeight: 400,
  src: ` url(${IranSansFont}) format('woff2')  `,
};


export const theme001 = createTheme({


  palette: {
    background: {
      default: "#DBE9F4"
    } , 
      green: {
        // header color
        main:"#ab003c" 
      } ,
      grey: {
        // side menu color
        main:"#131628" ,
        // complementary color for theme using in question
        dark: "#ab003c"
      } ,
      success: {
        // BackgroundColor
        main: "#DBE9F4" ,
        // hover effect on profile Icon color
        dark: "#980436" , 
        // BackgroundColor for submenu
        light: "#2F3249"
      } , 
      warning: {
        // Gradiant for SubHeader
        main: "#ab003c" ,
        // hover color on sidebar menu
        dark: "#AA1C4E" ,
      // selected item form sidemenu color
      light: "#ab003c"
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

      MuiRadio: {
        colorSecondary: {
          '&$checked': {
            color: "#ab003c",
          },
        },
      },
      
      MuiCheckbox: {
        colorSecondary: {
          "&$checked": {
            color: "#ab003c"
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