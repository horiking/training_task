// src/services/instrumentService.js
import api from "./api";

export const getInstruments = async () => {
  const res = await api.get("/instruments");
  return res.data;
};

export const addInstrument = async (instrument) => {
  const res = await api.post("/instruments", instrument);
  return res.data;
};

export const deleteInstrument = async (symbol) => {
  await api.delete(`/instruments/${symbol}`);
};
