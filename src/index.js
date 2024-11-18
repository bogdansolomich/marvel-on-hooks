import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import './style/style.scss';
import React from 'react';

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App />);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
