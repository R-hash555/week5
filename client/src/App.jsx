import React from "react";
import "./App.css";
import { Route, Routes,BrowserRouter } from "react-router-dom";
import L from "./ui/L";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<L />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
