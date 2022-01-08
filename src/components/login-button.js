// src/components/login-button.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from './button-style';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}
      style={Button} 
    >
      Log In
     
    </button>
  );
};

export default LoginButton;