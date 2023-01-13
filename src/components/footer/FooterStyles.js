import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative'
  },
  footer:{
    minHeight:'80px',
    background:'#06073F'
  },
  copyrights:{
    textAlign:'center',
    color:'white'
  },
  socials:{
    textAlign:'center',
    color:'white'
  },
  icons:{
    '&:hover': {
      color: '#326096',
      transition: "0.2s linear"
    }
  }
}));
export default useStyles;
