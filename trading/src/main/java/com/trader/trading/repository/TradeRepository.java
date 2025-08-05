package com.trader.trading.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.trader.trading.model.Trade;


public interface TradeRepository extends JpaRepository<Trade, Long> {
    // no extra methods needed for basic CRUD
}