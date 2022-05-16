import React from 'react';
import ReactDOM from 'react-dom';
// import Home from './pages/Home';
import Catalog from './pages/Catalog';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <Home /> */}
    <Catalog />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);
