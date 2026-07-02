# Expense Tracker

A simple, lightweight web application built to help users log their income and expenses, calculate their total remaining balance, and persist their history locally.

## Features

*   **Income & Expense Tracking:** Add transactions with positive values for income and negative values for expenses.
*   **Visual Color-Coding:** Transactions are dynamically stylized with green borders for income and red borders for expenses.
*   **Persistent Data:** Uses `localStorage` to save transaction history so your data is preserved even if you refresh or close the browser.
*   **Dynamic Calculations:** Real-time summary boxes break down total income, total expenses, and the ultimate remaining balance.
*   **Easy Management:** Quickly delete mistakes or old logs with a single click.

## File Structure

The project is structured with a modular frontend workflow split into three core files:

```text
├── index.html   # Main structure and UI entry point
├── style.css    # Clean, modern visual styling and responsive layout
└── script.js    # Application logic, data math, and LocalStorage syncing