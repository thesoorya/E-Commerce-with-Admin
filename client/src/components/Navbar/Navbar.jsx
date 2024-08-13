import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { StoreContext } from '../Context/StoreContext';
import "./Navbar.css";
import {toast} from 'react-toastify'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/cart" onClick={toggleMenu}>
          Cart
        </Link>
        {token ? (
          <span onClick={handleLogout} className="logout-btn">
            Logout
          </span>
        ) : (
          <>
            <Link to="/login" onClick={toggleMenu} className="login-btn">
              Login
            </Link>
            <Link to="/register" onClick={toggleMenu} className="signup-btn">
              Signup
            </Link>
          </>
        )}
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
