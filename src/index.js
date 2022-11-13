import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil'
import CssBaseline from "@mui/material/CssBaseline";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);