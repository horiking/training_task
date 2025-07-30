package com.trader.trading.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
public class ReconciliationRun {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate runDate;

    private String status;

    private int matchedCount;
    private int unmatchedCount;

    @OneToMany(mappedBy = "reconciliationRun", cascade = CascadeType.ALL)
    private List<ReconciliationDiff> differences;

    // Getters and Setters
}
