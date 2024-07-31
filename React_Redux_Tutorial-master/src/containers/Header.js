import React from "react";
import { Link } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';


const Header = () => {
  //const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
 // const dispatch = useDispatch();
  //const { loginWithRedirect } = useAuth0();
  const { isAuthenticated } = useAuth0();
  
  // const handleLogout = () => {
  //   dispatch(logout());
  //   alert("You have been logged out successfully!");
  // }
console.log(isAuthenticated)
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>
          <Link to="/">FakeShop</Link>
        </h2>
        <div className="right menu">
          <Link to="/" className="item"> Home</Link>
          <Link to="/cart" className="item">Cart</Link>
          
          {/* {isAuthenticated ? (
            <button className="ui item" onClick={handleLogout}>Logout</button>
          ) : ( */}
            <>
            { isAuthenticated ? <LogoutButton /> : <LoginButton /> }
            {/* <button onClick={() => loginWithRedirect()}>Log In</button>; */}
               {/* <Link to="/login" className="item">Login</Link>
               <Link to="/register" className="item">Register</Link>   */}
            </>
         {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default Header;
