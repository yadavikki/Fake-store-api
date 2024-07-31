
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
 import "../App.css";

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Welcome to FakeShop</h2>
        <p>Please log in to view more content and start shopping!</p>
        {/* <button className="ui button primary" onClick={loginWithRedirect}>
          Log In
        </button> */}
      </div>
    </div>
  );
};

export default LoginPage;
