// src/main/java/com/trader/trading/service/TradeService.java
package com.trader.trading.service;

import com.trader.trading.model.Trade;
import java.util.List;

public interface TradeService {
    List<Trade> listAll();
    Trade getById(Long id);
    Trade create(Trade trade);
    void delete(Long id);
}
