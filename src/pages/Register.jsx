import React from "react";
import Add from "../images/addAvatar.png";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <form>
          <span className="logo">iChatty</span>
          <span className="title">Register</span>

          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <label htmlFor="file">
            <input style={{ display: "none" }} type="file" id="file" />

            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>

          <button type="sumbit">Sign up</button>

          <p>You have an account? Login</p>
        </form>
      </div>
    </div>
  );
};

export default Register;
