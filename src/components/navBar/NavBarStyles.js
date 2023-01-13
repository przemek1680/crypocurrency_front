import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AlignHorizontalCenter } from '@mui/icons-material';
const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  navbar: {
    background: '#06073F',
  },
  logo: {
    margin: '-20px 0px -20px -10px',
    scale: '0.6'
  },
  media: {
    background: '#DCDCFF'
  },
  buttons: {
    '&:hover': {
      color: '#DCDCFF',
      transition: "0.2s linear"
    }
  },
}));
export default useStyles;
