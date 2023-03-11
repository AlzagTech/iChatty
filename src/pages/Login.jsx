import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target[0].value;
    const password = event.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <form onSubmit={handleSubmit}>
          <span className="logo">iChatty</span>
          <span className="title">Login</span>

          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button type="sumbit">Sign in</button>

          {error && <span>Somethomg went wrong...</span>}

          <p>
            You don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
