package com.trader.trading.repository;


import com.trader.trading.model.Trade;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TradesRepository extends JpaRepository<Trade, Long> {
}
