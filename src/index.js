import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import registerServiceWorker from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <div>{process.env.REACT_APP_MODE}</div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

registerServiceWorker()