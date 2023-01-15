import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    display: "fixed",    
  },
  main:{
    minHeight:"450px"
  },
  title:{
  padding:"25px"
  },
  crypto:{
    borderRadius:"20px",
    borderStyle:"solid",
    minHeight:"85px",
  },
  image:{
    width:"60px",
    padding:"25px",
  },
  desc:{
  }
  
}));
export default useStyles;
