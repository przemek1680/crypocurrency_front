import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed'
  },
  main: {
    padding:"45px",
    textAlign:"justify",
  },
 
}));
export default useStyles;
