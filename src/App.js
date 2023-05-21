import { ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import Homepage from './pages/homepage';
import { defaultTheme } from './constants';
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  // Update the defaultTheme to change default font, colors, etc
  const theme = createTheme(defaultTheme);
  return (
    // Handle MUI style overrides
    <StyledEngineProvider injectFirst>
      {/* Apply default theme */}
      <ThemeProvider theme={theme}>
        {/* Replace this component with React Router to add more pages */}
        <Homepage />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
