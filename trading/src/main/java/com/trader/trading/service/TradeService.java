package com.trader.trading.service;

import java.util.List;

import com.trader.trading.model.Trade;

public interface TradeService {
    List<Trade> listAll();
    Trade getById(Long id);
    Trade create(Trade trade);
    void delete(Long id);
}