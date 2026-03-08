import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#e8b86d',
      light: '#f5d08a',
      dark: '#c49040',
      contrastText: '#0d0d14',
    },
    secondary: {
      main: '#7c5cbf',
      contrastText: '#fff',
    },
    background: {
      default: '#0d0d14',
      paper: '#13131f',
    },
    text: {
      primary: '#f0f0f5',
      secondary: '#7a7a9a',
    },
    divider: '#22223a',
    error: { main: '#f87171' },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.02em' },
    h2: { fontWeight: 800, letterSpacing: '-0.01em' },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid #22223a',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 600, borderRadius: 10 },
      },
    },
    MuiChip: {
      styleOverrides: { root: { borderRadius: 8 } },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& fieldset': { borderColor: '#22223a' },
          '&:hover fieldset': { borderColor: '#e8b86d !important' },
          '&.Mui-focused fieldset': { borderColor: '#e8b86d !important' },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
      },
    },
  },
});

export default theme;
