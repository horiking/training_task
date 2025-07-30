package com.trader.trading.controller;

import com.trader.trading.model.Trade;
import com.trader.trading.service.TradeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/trades")
public class TradeController {

    private final TradeService tradeService;

    public TradeController(TradeService tradeService) {
        this.tradeService = tradeService;
    }

    @GetMapping
    public List<Trade> getAllTrades() {
        System.out.println(tradeService.findAll());
        return tradeService.findAll();
    }

    @GetMapping("/{id}")
    public Trade getTradeById(@PathVariable Long id) {
        return tradeService.findById(id).orElse(null);
    }

    @PostMapping
    public Trade createTrade(@RequestBody Trade trade) {
        return tradeService.save(trade);
    }

    @PutMapping("/{id}")
    public Trade updateTrade(@PathVariable Long id, @RequestBody Trade trade) {
        trade.setId(id);
        return tradeService.save(trade);
    }

    @DeleteMapping("/{id}")
    public void deleteTrade(@PathVariable Long id) {
        tradeService.deleteById(id);
    }
}
