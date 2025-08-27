import './styles/App.css';
import PromptScreen from './components/PromptScreen';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#f4a1da',
      light: '#fffee8',
      dark: '#d033ae',
      contrastText: '#5a0046'
    },
    secondary: {
      main: '#f8f175',
      light: '#fcf9c4',
      dark: '#f4d731',
      contrastText: '#b76800'
    },
  },
  typography: {
    fontFamily: 'Fredoka, sans-serif',
    fontWeightLight: 200,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    body1: {fontSize: '1rem'},
    body2: {fontSize: '0.875rem'},
    h1: {fontSize: '2rem'},
    h2: {fontSize: '1.5rem'},
    h3: {fontSize: '1.25rem'},
    h4: {fontSize: '1rem'},
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <PromptScreen />
      </div>
    </ThemeProvider>
  );
}

export default App;
