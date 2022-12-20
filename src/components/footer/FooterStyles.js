import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AlignHorizontalCenter } from '@mui/icons-material';
const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  footer:{
    minHeight:"60px",
    background:"#012840"
  },
  copy:{
    textAlign:"center",
    color:"white"
  },
  icons:{
    marginTop:15,
    paddingRight:15,
    paddingLeft:15
  }
}));
export default useStyles;
