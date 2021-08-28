import { blue, cyan } from '@material-ui/core/colors';
import {createTheme} from '@material-ui/core/styles';
import IranSansFont from "../../fonts/assets/IRANSans.woff2"


 const Iransans = {
  fontFamily: 'iransans',
  fontStyle: 'normal',
  fontWeight: 400,
  src: ` url(${IranSansFont}) format('woff2')  `,
};


export const theme003 = createTheme({
  palette: {
    background: {
      default: cyan[50]
    } , 
    green: {
      // header color
      main: blue[800]
    } ,
    grey: {
      // side menu color
      main: "#030421", 
      // complementary color for theme using in question
        dark: blue[100]
    } ,
    success: {
      // BackgroundColor
        main: "#C6DAEA" ,
        // hover effect on profile Icon color
        dark: "#1A234F" ,
        // BackgroundColor for submenu
        light: "#2F3249"
    } , 
    warning: {
      // Gradiant for SubHeader
        main: blue[700],
        // hover color on sidebar menu
        dark: "#444674" ,
      // selected item form sidemenu color
        light: "#1261A0"
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
            color: "#1261A0",
          },
        },
      },

                  
      MuiCheckbox: {
        colorSecondary: {
          "&$checked": {
            color: '#1261A0'
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