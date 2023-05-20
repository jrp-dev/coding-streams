import errorIconSvg from 'assets/images/icon-error.svg';

// Icon error at the end of inputs
export const errorIcon = errorIconSvg;

// Font Family
export const font = "'Poppins', sans-serif";

// Default theme object
export const defaultTheme = {
  palette: {
    primary: {
      main: 'hsl(248, 32%, 49%)',
    },
    secondary: {
      main: 'hsl(154, 59%, 51%)',
    },
    error: {
      main: 'hsl(0, 100%, 74%)',
    },
  },
  typography: {
    fontFamily: font,
    h3: {
      fontSize: '2rem', // Default font size
      '@media (min-width:600px)': {
        fontSize: '2.5rem', // Font size for screens >= 600px
      },
      '@media (min-width:960px)': {
        fontSize: '3rem', // Font size for screens >= 960px
      },
      '@media (min-width:1280px)': {
        fontSize: '3.5rem', // Font size for screens >= 1280px
      },
    },
  },
};
