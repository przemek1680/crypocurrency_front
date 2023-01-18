import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    display: "relative",
  },
  foot:{
    paddingTop:"450px"
  },
  login:{
    border:"2px solid"
  },
  image:{
    width: "60px",
    padding: "25px",
    margin: '0 9rem 0 9rem',
    borderRadius: "90px",
    borderColor: "#EAF2FF",
    borderStyle: "solid",
  }
}));
export default useStyles;
