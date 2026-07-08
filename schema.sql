DROP TABLE IF EXISTS pizza_counter;
DROP TABLE IF EXISTS pizza_orders;

CREATE TABLE pizza_counter (
    id INTEGER PRIMARY KEY CHECK (id = 1),
    current_count INTEGER NOT NULL
);

CREATE TABLE pizza_orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    ip_address TEXT NOT NULL
);

INSERT INTO pizza_counter (id, current_count) VALUES (1, 200);