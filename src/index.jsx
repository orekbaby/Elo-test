import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MoralisProvider } from 'react-moralis';
import './index.css';
import { MoralisDappProvider } from './providers/MoralisDappProvider/MoralisDappProvider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'hsl(var(--primary))',
      contrastText: 'hsl(var(--primary-foreground))',
    },
    secondary: {
      main: 'hsl(var(--secondary))',
      contrastText: 'hsl(var(--secondary-foreground))',
    },
    background: {
      default: 'linear-gradient(to right, #0f0f10, #1a1a1d)',
      paper: 'hsl(var(--card))',
    },
    text: {
      primary: 'hsl(var(--foreground))',
      secondary: 'hsl(var(--muted-foreground))',
    },
    action: {
      hover: 'rgba(255, 255, 255, 0.1)',
    },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          textTransform: 'inherit',
          borderRadius: 25,
          padding: '10px 20px',
          transition: '0.3s ease-in-out',
        },
        contained: {
          background: 'linear-gradient(135deg, hsl(var(--chart-1)), hsl(var(--chart-2)))',
          '&:hover': {
            background: 'linear-gradient(135deg, hsl(var(--chart-3)), hsl(var(--chart-4)))',
          },
        },
        outlined: {
          borderColor: 'hsl(var(--border))',
          '&:hover': {
            background: 'hsl(var(--muted))',
          },
        },
      },
    },
  },
});

const POLLING_INTERVAL = 12000;

const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
};

// const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
// const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

const APP_ID = 'DYFU90AwvC6Ktjxrr31VdJNhAV5UadWBr97duwex';

const SERVER_URL = 'https://gq7x7ofh7pyg.usemoralis.com:2053/server';

const Application = () => {
  return (
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <MoralisDappProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </MoralisDappProvider>
      </Web3ReactProvider>
    </MoralisProvider>
  );
};

ReactDOM.render(
  // <React.StrictMode>
  <Application />,
  // </React.StrictMode>,
  document.getElementById('root')
);
