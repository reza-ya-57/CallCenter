import { purple } from '@material-ui/core/colors';
import {createTheme} from '@material-ui/core/styles';
import IranSansFont from "../../fonts/assets/IRANSans.woff2";




const Iransans = {
  fontFamily: 'iransans',
  fontStyle: 'normal',
  fontWeight: 400,
  src: ` url(${IranSansFont}) format('woff2')  `,
};


export const theme005 = createTheme({
  palette: {
    background: {
      default: purple[30]
    } , 
    
      green: {
        // header color
        main: purple[900] 
      } ,
      grey: {
        // side menu color
        main:"#120632", 
        // complementary color for theme using in question
          dark: purple[100]
      } ,
      success: {
        // using in question number
        main: purple[900] ,
        // hover effect on profile Icon color
        dark: "#980436" , 
        // BackgroundColor for submenu
        light: "#2E165B"
      } , 
      warning: {
        // Gradiant for SubHeader
        main: purple[800] ,
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
      MuiRadio: {
        colorSecondary: {
          '&$checked': {
            color: "#2E165B",
          },
        },
      },

                        
      MuiCheckbox: {
        colorSecondary: {
          "&$checked": {
            color: purple[800]
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