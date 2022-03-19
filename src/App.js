import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import { auth } from "./Firebase";
import { userStateValue } from "./StateProvider";

function App() {
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("USER: ", authUser);
      if (authUser) {
        // User Logged In
        dispatch({
          type: "SET_USER",
        });
      } else {
        // Usser Logged Out
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            {/* <h1>This is Login Page</h1> */}
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
