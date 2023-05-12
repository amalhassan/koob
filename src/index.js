import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import "@fontsource/courier-prime";
import "@fontsource/roboto";
import koobTheme from './theme/theme';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={koobTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

