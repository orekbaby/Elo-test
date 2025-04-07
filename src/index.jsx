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
      main: '#1a73e8',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9c27b0',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0a192f',
      paper: '#172a45',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
    },
    action: {
      hover: 'rgba(255, 255, 255, 0.15)',
    },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          backgroundColor: '#0a192f',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #0a192f 0%, #172a45 100%)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          textTransform: 'inherit',
          borderRadius: 25,
          padding: '10px 24px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)',
          color: '#ffffff',
          '&:hover': {
            background: 'linear-gradient(135deg, #0d47a1 0%, #1a73e8 100%)',
          },
        },
        outlined: {
          borderColor: 'rgba(255, 255, 255, 0.3)',
          color: '#ffffff',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.1)',
            borderColor: 'rgba(255, 255, 255, 0.5)',
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
