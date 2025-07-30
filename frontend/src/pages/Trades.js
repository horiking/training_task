// frontend/src/pages/Trades.js
import React, { useEffect, useState } from "react";
import { getTrades, addTrade, deleteTrade } from "../services/tradeService";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function Trades() {
  const [trades, setTrades] = useState([]);
  const [form, setForm] = useState({
    trade_id: "",
    instrument: "",
    price: "",
    quantity: "",
    source_system: "",
    trade_date: "",
  });

  useEffect(() => {
    loadTrades();
  }, []);

  const loadTrades = async () => {
    try {
      const data = await getTrades();
      setTrades(data);
    } catch (err) {
      console.error("Error fetching trades:", err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddTrade = async (e) => {
    e.preventDefault();
    try {
      await addTrade(form);
      setForm({
        trade_id: "",
        instrument: "",
        price: "",
        quantity: "",
        source_system: "",
        trade_date: "",
      });
      loadTrades();
    } catch (err) {
      console.error("Error adding trade:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTrade(id);
      loadTrades();
    } catch (err) {
      console.error("Error deleting trade:", err);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Trade Management
      </Typography>

      {/* Add Trade Form */}
      <Box component="form" onSubmit={handleAddTrade} sx={{ mb: 3 }}>
        <TextField
          label="Trade ID"
          name="trade_id"
          value={form.trade_id}
          onChange={handleChange}
          required
          sx={{ mr: 2 }}
        />
        <TextField
          label="Instrument"
          name="instrument"
          value={form.instrument}
          onChange={handleChange}
          required
          sx={{ mr: 2 }}
        />
        <TextField
          label="Price"
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          required
          sx={{ mr: 2 }}
        />
        <TextField
          label="Quantity"
          name="quantity"
          type="number"
          value={form.quantity}
          onChange={handleChange}
          required
          sx={{ mr: 2 }}
        />
        <TextField
          label="Source System"
          name="source_system"
          value={form.source_system}
          onChange={handleChange}
          required
          sx={{ mr: 2 }}
        />
        <TextField
          label="Trade Date"
          name="trade_date"
          type="date"
          value={form.trade_date}
          onChange={handleChange}
          required
          sx={{ mr: 2 }}
          InputLabelProps={{ shrink: true }}
        />
        <Button type="submit" variant="contained" color="primary">
          Add Trade
        </Button>
      </Box>

      {/* Trade Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Trade ID</TableCell>
              <TableCell>Instrument</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Source System</TableCell>
              <TableCell>Trade Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trades.map((trade) => (
              <TableRow key={trade.id}>
                <TableCell>{trade.trade_id}</TableCell>
                <TableCell>{trade.instrument}</TableCell>
                <TableCell>{trade.price}</TableCell>
                <TableCell>{trade.quantity}</TableCell>
                <TableCell>{trade.source_system}</TableCell>
                <TableCell>{trade.trade_date}</TableCell>
                <TableCell>
                  <Button
                    color="error"
                    onClick={() => handleDelete(trade.id)}
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Trades;
