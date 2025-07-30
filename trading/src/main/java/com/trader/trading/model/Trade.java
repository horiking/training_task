// src/main/java/com/trader/trading/model/Trade.java
package com.trader.trading.model;

import jakarta.persistence.*;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import java.time.LocalDate;

@Entity
@Table(name = "trade")
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class Trade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "trade_id", nullable = false)
    private String tradeId;

    @Column(nullable = false)
    private String instrument;

    @Column(nullable = false)
    private Double price;

    @Column(nullable = false)
    private Integer quantity;

    @Column(name = "source_system", nullable = false)
    private String sourceSystem;

    @Column(name = "trade_date", nullable = false)
    private LocalDate tradeDate;

    public Trade() {
    }

    public Trade(Long id,
                 String tradeId,
                 String instrument,
                 Double price,
                 Integer quantity,
                 String sourceSystem,
                 LocalDate tradeDate) {
        this.id = id;
        this.tradeId = tradeId;
        this.instrument = instrument;
        this.price = price;
        this.quantity = quantity;
        this.sourceSystem = sourceSystem;
        this.tradeDate = tradeDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTradeId() {
        return tradeId;
    }

    public void setTradeId(String tradeId) {
        this.tradeId = tradeId;
    }

    public String getInstrument() {
        return instrument;
    }

    public void setInstrument(String instrument) {
        this.instrument = instrument;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getSourceSystem() {
        return sourceSystem;
    }

    public void setSourceSystem(String sourceSystem) {
        this.sourceSystem = sourceSystem;
    }

    public LocalDate getTradeDate() {
        return tradeDate;
    }

    public void setTradeDate(LocalDate tradeDate) {
        this.tradeDate = tradeDate;
    }
}
