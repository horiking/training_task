package com.trader.trading.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Trade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tradeId;

    @ManyToOne
    @JoinColumn(name = "instrument")
    private Instrument instrument;

    private Double price;
    private Integer quantity;

    private String sourceSystem;

    private LocalDate tradeDate;

    // Getters and Setters
}
