package com.trader.trading.model;

import jakarta.persistence.*;

@Entity
public class ReconciliationDiff {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tradeId;
    private String fieldName;

    private String valueSystemA;
    private String valueSystemB;

    @ManyToOne
    @JoinColumn(name = "reconciliation_run_id")
    private ReconciliationRun reconciliationRun;

    // Getters and Setters
}
