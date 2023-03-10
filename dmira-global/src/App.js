import React from "react";
import "./App.css"
import Home from "./pages/auth/Home";
import Register from "./pages/auth/Register"
import Login from "./pages/auth/Login";
import Enterotp from "./pages/auth/Enterotp";
import Layout from "./components/Layout"
import ForgotPassword from "./pages/auth/ForgotPassword";
import Missing from "./pages/auth/Missing";
import RequireAuth from "./components/RequireAuth";
import {Routes, Route } from 'react-router-dom'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* public routes*/}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="enterotp" element={<Enterotp />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          
          {/* protected routes*/}
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Login />} />
          </Route>

          {/* catch all */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
  );
}

export default App;
