package com.trader.trading.controller;


import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/trades")
public class TradesController {

    @GetMapping
    public String helloTrade() {
        return "Hello from TradeController - GET /api/trades";
    }

    @PostMapping
    public String helloTradePost() {
        return "Hello from TradeController - POST /api/trades";
    }

    @GetMapping("/{id}")
    public String helloTradeById(@PathVariable String id) {
        return "Hello from TradeController - GET /api/trades/" + id;
    }

    @DeleteMapping("/{id}")
    public String helloTradeDelete(@PathVariable String id) {
        return "Hello from TradeController - DELETE /api/trades/" + id;
    }
}
