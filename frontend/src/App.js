// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Trades from "./pages/Trades";
import Instruments from "./pages/Instruments";
import Reconciliation from "./pages/Reconciliation";
import { AppBar, Toolbar, Typography, Button, Container, Box } from "@mui/material";
import Footer from "./pages/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
          <Toolbar>
            {/* Title */}
              <Box
                component="img"
                src="/dblogo.jpeg"
                alt="Logo"
                sx={{
                  height: 32,
                  mr: 1, 
                }}
              />
            <Typography variant="h6" sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
              Trade Reconciliation System
              {/* Logo to the right of the text */}
            </Typography>

            {/* Nav buttons */}
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

        <Container sx={{ mt: 4, mb: 2, flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Trades />} />
            <Route path="/instruments" element={<Instruments />} />
            <Route path="/reconciliation" element={<Reconciliation />} />
          </Routes>
        </Container>

        <Footer />
      </Box>
    </Router>
  );
}

export default App;
