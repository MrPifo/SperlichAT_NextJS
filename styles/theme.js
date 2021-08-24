import { createTheme } from '@material-ui/core/styles';

const primary = "#b71c1c";
const secondary = "#ffd54f";

const theme = createTheme({
    palette: {
        primary: {
            main:primary,
        },
        secondary: {
            main:secondary,
        }
    },
    typography:{
        fontFamily:'Quicksand',
    }
});

export default theme;