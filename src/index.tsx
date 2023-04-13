// import React from 'react';
// import ReactDOM from 'react-dom';
// import { App } from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// React18でのrender
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from "./App";
// import App from './App';
import { AdminFlagProvider } from "./components/7_global-state/providers/AdminFlagProvider";
import "./index.css";

const root = createRoot(document.getElementById('root')!);
root.render(<App />);

root.render(
  <React.StrictMode>
    <AdminFlagProvider>
      <App />
    </AdminFlagProvider>
  </React.StrictMode>
);


