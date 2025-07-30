// src/main/java/com/trader/trading/repository/TradeRepository.java
package com.trader.trading.repository;

import com.trader.trading.model.Trade;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TradeRepository extends JpaRepository<Trade, Long> {
}
