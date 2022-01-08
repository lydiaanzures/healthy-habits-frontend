import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "milligram"
import { BrowserRouter as Router, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";



ReactDOM.render(
  <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
  <Router>
   <React.StrictMode>
    <Route path="/" component={App} />
    </React.StrictMode>
  </Router>
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
