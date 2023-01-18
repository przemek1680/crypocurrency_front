import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    display: "relative"
  },
  main:{
    minHeight: "450px",
    backgroundColor: "#F3F8FF",
    width: "100%",
    paddingBottom: "60px"
  },
  crypto:{
    borderRadius: "20px",
    borderStyle: "solid",
    borderColor: "06073F",
    background: "#F7FAFF",
    minHeight: "85px",
    padding: "8px 8px 8px 8px"
  },
  image:{
    width: "60px",
    padding: "25px",
    borderRadius: "20px",
    borderStyle: "solid",
    '&:hover': {
      background: "#F1F4F9",
      transition: "0.5s linear"
    }
  }
}));
export default useStyles;
