import { purple, red } from '@material-ui/core/colors';
import {createTheme} from '@material-ui/core/styles';
import IranSansFont from "../../fonts/assets/IRANSans.woff2"

 const IranSans = {
  fontFamily: 'iransans',
  fontStyle: 'normal',
  fontWeight: 400,
  src: ` url(${IranSansFont}) format('woff')  `,
};


export const theme002 = createTheme({
  palette: {
    background: {
      default: "#F8E8E8"
    } , 
    // header color
    green: {
      main:"#000000"
    } ,
    // side menu color
    grey: {
      main: "#1E1B1B" , 
    // complementary color for theme using in question
      dark: red[800]
    } ,
    // BackgroundColor
    success: {
      main: "#F8E8E8",
      // hover effect on profile Icon color
      dark: "#302222" , 
      // BackgroundColor for submenu
      light: "#333333"
    } , 
    warning: {
      // Gradiant for SubHeader
      main: "#f9f9f9" ,
      // hover color on sidebar menu
      dark: "#BE4147" , 
      // selected item form sidemenu color
      light: "#9B0007"
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
          '@font-face': [IranSans],
        },
      },

      MuiRadio: {
        colorSecondary: {
          '&$checked': {
            color: "black",
          },
        },
      },

            
      MuiCheckbox: {
        colorSecondary: {
          "&$checked": {
            color: red[900]
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