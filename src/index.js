import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import './assets/font/font.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    background-color: #010001;
  }
  body{
    overflow-x: hidden;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
root.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </>,
);
