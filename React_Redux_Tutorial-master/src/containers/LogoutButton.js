// src/components/LogoutButton.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../App.css'; // Ensure this import is present if not already

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="ui button primary" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

export default LogoutButton;
