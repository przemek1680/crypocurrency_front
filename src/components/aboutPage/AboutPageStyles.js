import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { areOptionsEqual } from '@mui/base';

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
  },
  about: {
    paddingTop: '20px',
  },
  questions: {
    textAlign: 'center',
    paddingTop: '40px',
    paddingBottom: '20px',
  },
}));
export default useStyles;
