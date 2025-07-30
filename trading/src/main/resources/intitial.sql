-- Create the database
CREATE DATABASE IF NOT EXISTS reconciliation_db;
USE reconciliation_db;

-- Create the Instrument table
CREATE TABLE Instrument (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Symbol VARCHAR(20),
    Name VARCHAR(100),
    isin VARCHAR(20)
);

-- Create the trade table
CREATE TABLE trade (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    trade_id VARCHAR(50),
    instrument INT,
    price DECIMAL(20, 4),
    quantity INT,
    source_system VARCHAR(50),
    trade_date DATE,
    FOREIGN KEY (instrument) REFERENCES Instrument(ID)
);

-- Create the reconciliation_run table
CREATE TABLE reconciliation_run (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    run_date DATE,
    status VARCHAR(20),
    Matched_count INT,
    unMatched_count INT
);

-- Create the reconciliation_Diff table
CREATE TABLE reconciliation_Diff (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    trade_id VARCHAR(50),
    field_name VARCHAR(50),
    value_system_a VARCHAR(255),
    value_system_b VARCHAR(255),
    reconciliation_run_id INT,
    FOREIGN KEY (reconciliation_run_id) REFERENCES reconciliation_run(ID)
);
