import React from "react";
import "./App.css";
import { Route, Routes,BrowserRouter } from "react-router-dom";
import L from "./ui/L";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<L />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
