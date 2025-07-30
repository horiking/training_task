// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Trades from "./pages/Trades"; // Make sure this file exists
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Default page shows Trades */}
          <Route path="/" element={<Trades />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
