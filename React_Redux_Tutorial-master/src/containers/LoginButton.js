// src/components/LoginButton.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../App.css'; // Ensure this import is present if not already

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="ui button primary" onClick={() => loginWithRedirect()}>
      Log In
    </button>
  );
};

export default LoginButton;
