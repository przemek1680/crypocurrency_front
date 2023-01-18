import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

const useStyles = makeStyles((theme) => ({
    wrapper: {
        position: 'relative'
    },
    loader: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: '-12px',
        marginLeft: '-12px',
    },
    button:{
        '&:hover': {
            color: '#326096',
            transition: "0.4s linear"
          }
    }

}));

export default useStyles;