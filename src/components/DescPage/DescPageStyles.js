import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    display: "fixed",    
  },
  desc:{
    textAlign:"justify"
  },
  image:{
    width:"100%",
    height:"auto"
  }
}));
export default useStyles;
