import { ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import Homepage from './pages/homepage';
import { defaultTheme } from 'constants';

function App() {
  // Update the defaultTheme to change default font, colors, etc
  const theme = createTheme(defaultTheme);
  return (
    <ThemeProvider theme={theme}>
      {/* Replace this component with React Router to add more pages */}
      <Homepage />
    </ThemeProvider>
  )
}

export default App;
