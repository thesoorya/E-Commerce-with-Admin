import React from "react";
import "./Buttons.css";
import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <div className="button-container">
      <Link to="/list" className="full-width-button">
        <button>List</button>
      </Link>
      <Link to="/add" className="full-width-button">
        <button>Add</button>
      </Link>
    </div>
  );
};

export default Buttons;
