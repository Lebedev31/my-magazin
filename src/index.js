import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/style/normalize.scss';
import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <div>
            <App/>
       </div>
  </React.StrictMode>
);

