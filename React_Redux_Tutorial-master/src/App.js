// src/App.js
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import ProductDetails from "./containers/ProductDetails";
import CartComponent from "./containers/CartComponent";
import PrivateRoute from "./containers/PrivateRoute"; 
import LoginPage from "./containers/LoginComponent";
import { useAuth0 } from "@auth0/auth0-react"; 
import "./App.css";

function App() {
  const { isAuthenticated } = useAuth0();
  console.log("Authentication status :",isAuthenticated)
  return (
   
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            {isAuthenticated ? <Redirect to="/list" /> :<LoginPage/>}
          </Route>
          <PrivateRoute path="/list" component={ProductListing} />
          <PrivateRoute path="/product/:productId" component={ProductDetails} />
          <PrivateRoute path="/cart" component={CartComponent} />
          <Route path="*">404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
