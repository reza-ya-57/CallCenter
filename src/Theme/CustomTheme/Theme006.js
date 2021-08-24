import {createTheme} from '@material-ui/core/styles';
import IranSansFont from "../../fonts/assets/IRANSans.woff2";




const Iransans = {
  fontFamily: 'iransans',
  fontStyle: 'normal',
  fontWeight: 400,
  src: ` url(${IranSansFont}) format('woff2')  `,
};


export const theme006 = createTheme({
  palette: {
      green: {
        // header color
        main:"#b79906" 
      } ,
      grey: {
        // side menu color
        main:"#120B01"
      } ,
      success: {
        // BackgroundColor
        main: "#ECE1D0" ,
        // hover effect on profile Icon color
        dark: "#980436" , 
        // BackgroundColor for submenu
        light: "#2F3249"
      } , 
      warning: {
        // Gradiant for SubHeader
        main: "#EEB34B" ,
        // hover color on sidebar menu
        dark: "#B49311" ,
      // selected item form sidemenu color
        light: "#CE5501"
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
            color: "#b79906",
          },
        },
      },

      MuiFormControl: {
        root: {
          width: "100%"
        }
      }
    },
  });