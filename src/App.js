import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

import "./styles.scss";

export const App = () => {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  console.log(currentUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route
          index
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route index path="login" element={<Login />} />
        <Route index path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
