import {createTheme} from '@material-ui/core/styles';
import IranSansttf from "../fonts/assets/Sahel-Black-FD.woff2";


 const IranSans = {
  fontFamily: 'IranSans',
  fontStyle: 'normal',
  fontWeight: 400,
  src: ` url(${IranSansttf}) format('woff2')  `,
};


export const theme = createTheme({
    direction: 'rtl',
    // typography: {
    //   fontFamily: 'IranSans, Arial',
    // },
    // overrides: {
    //   MuiCssBaseline: {
    //     '@global': {
    //       '@font-face': [IranSans],
    //     },
    //   },
    // },
  });