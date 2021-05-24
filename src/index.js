import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DictionaryContextProvider } from './Context/DictionaryContext';

ReactDOM.render(
  <DictionaryContextProvider>
    <App />
  </DictionaryContextProvider>,
  document.getElementById('root')
);

