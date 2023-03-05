import React from "react";
import Add from "../images/addAvatar.png";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <form>
          <span className="logo">iChatty</span>
          <span className="title">Login</span>

          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button type="sumbit">Sign in</button>

          <p>You don't have an account? Register</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
