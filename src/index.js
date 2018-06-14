import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './style/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

/**
 * Instantiate the browser router from react-router, and include the App
 * component that includes the routes, within the router. Render it all
 * to the 'root' element on the HTML page.
 */
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
