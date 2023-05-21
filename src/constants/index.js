import errorIconSvg from 'assets/images/icon-error.svg';

// Icon error at the end of inputs
export const errorIcon = errorIconSvg;

// Font Family
export const font = "'Poppins', sans-serif";

export const colors = {
  redColor: 'hsl(0, 100%, 74%)',
  greenColor: 'hsl(154, 59%, 51%)',
  greenColorDark: 'hsl(154, 60%, 44%)',
  blueColor: 'hsl(248, 32%, 49%)',
  blueColorLight: 'hsl(248, 38%, 57%)',
  darkBlueColor: 'hsl(249, 10%, 26%)',
  grayishBlueColor: 'hsl(246, 25%, 77%)',
};

// Default theme object
export const defaultTheme = {
  palette: {
    primary: {
      main: colors.blueColor,
    },
    secondary: {
      main: colors.greenColor,
    },
    error: {
      main: colors.redColor,
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
