import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

import Add from "../images/addAvatar.png";

const Register = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const displayName = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const file = event.target[3].files[0];

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          console.log(error);

          setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(response.user, {
              displayName,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", response.user.uid), {
              uid: response.user.uid,
              displayName: displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", response.user.uid), {});

            navigate("/");
          });
        }
      );
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

          {error && <span>Somethomg went wrong...</span>}

          <p>
            You have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
