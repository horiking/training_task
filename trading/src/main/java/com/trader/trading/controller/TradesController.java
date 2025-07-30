// src/main/java/com/trader/trading/controller/TradesController.java
package com.trader.trading.controller;
import com.trader.trading.model.Trade;
import com.trader.trading.service.TradesService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/trades")
public class TradesController {

    private final TradesService service;

    public TradesController(TradesService service) {
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