import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { StoreContext } from '../../components/Context/StoreContext';
import axios from "axios";
import { toast } from 'react-toastify';
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { url, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${url}/api/auth/login`, { email, password });
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        toast.success('Login successful');
        navigate('/');
      } else {
        setError(response.data.message);
        toast.error(response.data.message);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "An error occurred. Please try again.";
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {<div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        New user? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;