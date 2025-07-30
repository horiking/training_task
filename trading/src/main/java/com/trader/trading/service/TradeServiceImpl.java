package com.trader.trading.service;


import com.trader.trading.model.Trade;
import com.trader.trading.repository.TradesRepository;
import com.trader.trading.service.TradesService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TradeServiceImpl implements TradesService {

    private final TradesRepository repository;

    public TradeServiceImpl(TradesRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Trade> listAll() {
        return repository.findAll();
    }

    @Override
    public Trade getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Trade not found with id: " + id));
    }

    @Override
    public Trade create(Trade trade) {
        return repository.save(trade);
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
