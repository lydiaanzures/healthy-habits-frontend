// src/components/authentication-button.js

import React from 'react';

import LoginButton from './login-button';
import LogoutButton from './logout-button';

import { useAuth0 } from '@auth0/auth0-react';
import Button from './button-style';

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton  />;
};

export default AuthenticationButton;