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
