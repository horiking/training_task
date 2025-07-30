package com.trader.trading.service;

import com.trader.trading.model.Trade;
import java.util.List;

public interface TradesService {
    List<Trade> listAll();
    Trade getById(Long id);
    Trade create(Trade trade);
    void delete(Long id);
}