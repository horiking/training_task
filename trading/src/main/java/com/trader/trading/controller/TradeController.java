// src/main/java/com/trader/trading/controller/TradeController.java
package com.trader.trading.controller;

import com.trader.trading.model.Trade;
import com.trader.trading.service.TradeService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/trades")
@CrossOrigin(origins = "http://localhost:3000")  // allow your React dev server
public class TradeController {

    private final TradeService service;

    public TradeController(TradeService service) {
        this.service = service;
    }

    @GetMapping
    public List<Trade> getAll() {
        return service.listAll();
    }

    @GetMapping("/{id}")
    public Trade getOne(@PathVariable Long id) {
        return service.getById(id);
    }

    @PostMapping
    public Trade create(@RequestBody Trade trade) {
        return service.create(trade);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
