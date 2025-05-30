import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { searchCompanies } from './api';
import { RouterProvider } from 'react-router';
import { router } from './Routes/Route';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


// const logCompanyData = async () => {
//   const companyData = await searchCompanies("tsla");
//   console.log(companyData);
// };
//logCompanyData();
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
