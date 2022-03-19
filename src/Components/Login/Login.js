import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../Firebase";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    // FireBase Login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    // Firebase Register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src="/images/Amazon_logo_login.png" />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={signIn}
            type="submit"
            className="login_signin_button"
          >
            Sign in
          </button>
        </form>
        <p>
          By Siging in you agree to Amazon's Conditions of use and sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest based Ads
          Notice.
        </p>
        <button onClick={register} className="login_register_button">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
