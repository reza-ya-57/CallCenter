import { brown, green, pink, purple, red } from '@material-ui/core/colors';
import {createTheme} from '@material-ui/core/styles';
// import IranSansttf from "../fonts/assets/Sahel-Black-FD.woff2";
// import ShabnamBold from "../fonts/assets/Shabnam_Bold.woff";


//  const Shabnam = {
//   fontFamily: 'shabnam',
//   fontStyle: 'normal',
//   fontWeight: 400,
//   src: ` url(${ShabnamBold}) format('woff')  `,
// };


export const theme002 = createTheme({
    palette: {
      secondary: {
        main: brown[500]
      } , 
      primary: {
          main: green[500]
      } , 
      error: {
        main: red[200]
      }
    } ,
    direction: 'rtl',
    // typography: {
    //   fontFamily: 'shabnam, Arial',
    // },
    // overrides: {
    //   MuiCssBaseline: {
    //     '@global': {
    //       '@font-face': [Shabnam],
    //     },
    //   },
    // },
  });