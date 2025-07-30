package com.trader.trading.model;

import jakarta.persistence.*;

@Entity
public class Instrument {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String symbol;
    private String name;
    private String isin;

    // Getters and Setters
}
