import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    display: "relative"
  },
  introduction: {
    padding: "45px",
    textAlign: "justify",
    paddingBottom: "20px"
  },
  image: {
    scale: "1.2",
    width:"90%",
    height:"auto",
    paddingTop:"35%",
    marginLeft:"auto",
    marginRight:"auto"
  }
}));
export default useStyles;
