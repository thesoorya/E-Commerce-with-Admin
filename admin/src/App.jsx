import React from "react";
import "./App.css";
import List from "./pages/List/List";
import Add from "./pages/Add/Add";
import Order from "./pages/Order/Order";
import Buttons from "./components/Buttons/Buttons";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const url = "http://localhost:5000";

  return (
    <div className="app">
      <ToastContainer />
      <Buttons />
      <Routes>
        <Route path="/" element={<Navigate to="/list" />} />
        <Route path="/list" element={<List url={url} />} />
        <Route path="/add" element={<Add url={url} />} />
        <Route path="/order" element={<Order url={url} />} />
      </Routes>
    </div>
  );
};

export default App;
