// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Trades from "./pages/Trades";
import Instruments from "./pages/Instruments";
import Reconciliation from "./pages/Reconciliation";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Router>
      <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Trade Reconciliation System
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Trades
          </Button>
          <Button color="inherit" component={Link} to="/instruments">
            Instruments
          </Button>
          <Button color="inherit" component={Link} to="/reconciliation">
            Reconciliation
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Trades />} />
          <Route path="/instruments" element={<Instruments />} />
          <Route path="/reconciliation" element={<Reconciliation />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
