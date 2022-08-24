import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';
import StarsWarProvider from './context/stars-wars.contex';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// uri: 'http://localhost:5000/graphql',
const client = new ApolloClient({
  uri: 'https://api.sovtech.dev/graphql',
  cache: new InMemoryCache(),
})
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <StarsWarProvider>
          <App />
        </StarsWarProvider>
      </BrowserRouter>
    </ApolloProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
