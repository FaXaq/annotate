import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const div = document.createElement("div");
div.id = "annotate_extension_root";

document.body.prepend(div);

const root = ReactDOM.createRoot(
  document.getElementById('annotate_extension_root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
