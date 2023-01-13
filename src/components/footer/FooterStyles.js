import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AlignHorizontalCenter } from '@mui/icons-material';
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
      color: '#DCDCFF',
    }
  }
}));
export default useStyles;
