import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./adminLogin.scss";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ADMIN_EMAIL = "abc@gmail.com";
const ADMIN_PASSWORD = "demo123";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      sessionStorage.setItem("adminEmail", ADMIN_EMAIL);
      navigate("/admin");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <>
      <Navbar />
      <section className="admin-login">
        <div className="admin-login__card">
          <h2>Admin login</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && (
              <p style={{ color: "#b50909", margin: "8px 0" }}>{error}</p>
            )}

            <button type="submit">Sign in</button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AdminLogin;
