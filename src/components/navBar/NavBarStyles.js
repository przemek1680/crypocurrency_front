import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AlignHorizontalCenter } from '@mui/icons-material';
const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  navbar: {
    background: '#5B9EA6',
  },
  media: {
    background: 'yellow',
  },
  icons: {
    marginTop: 30,
    marginLeft: '30px',
  },
}));
export default useStyles;
