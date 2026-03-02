import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Forgot from "./pages/forgot/Forgot";
import Verification from "./pages/verification/Verification";
import Reset from "./pages/reset/Reset";
import Success from "./pages/success/Success";
import People from "./pages/people/People";

const App = () => {
  return (
    <div className="container">

      <Routes>
        <Route path="/" element={<People />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/success" element={<Success />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </div>
  );
};

export default App;