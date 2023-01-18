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
  form:{
    padding: "5px"
  },
  register:{
    textDecoration: "none",
    '&:hover': {
      textDecoration: "underline"
    }
  },
  image:{
    width: "60px",
    padding: "25px",
    margin: '0 9rem 0 9rem',
    backgroundColor: '#FBFDFF',
    borderWidth: '2px',
    borderRadius: "90px",
    borderColor: "#EAF2FF",
    borderStyle: "solid"
  },
  buttons:{
    textDecoration: "none",
    padding: "10px",
    '&:hover': {
      textDecoration: "underline"
    }
  }
}));
export default useStyles;
