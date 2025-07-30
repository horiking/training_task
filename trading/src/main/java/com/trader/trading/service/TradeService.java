package com.trader.trading.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.trader.trading.model.Trade;
import com.trader.trading.repository.TradeRepository;

@Service
public class TradeService {

    private final TradeRepository tradeRepository;

    public TradeService(TradeRepository tradeRepository) {
        this.tradeRepository = tradeRepository;
    }

    public List<Trade> findAll() {
        return tradeRepository.findAll();
    }

    public Optional<Trade> findById(Long id) {
        return tradeRepository.findById(id);
    }

    public Trade save(Trade trade) {
        return tradeRepository.save(trade);
    }

    public void deleteById(Long id) {
        tradeRepository.deleteById(id);
    }
}
