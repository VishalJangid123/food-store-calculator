# Food Store Price Calculator

This is a simple **React** application for calculating the total price of food orders in a store. The store offers a fixed menu with 7 different sets, and allow to apply discounts based on certain conditions. 

## Problem Statement

Write a Calculator class for food store (you can use any programming languages)

- This food store only have 7 items in menu
    - Red set	50 THB/set
    - Green set	40 THB/set
    - Blue set	30 THB/set
    - Yellow set	50 THB/set
    - Pink set	80 THB/set
    - Purple set	90 THB/set
    - Orange set	120 THB/set
- Customers can order multiple items
- Write a function that receives these 7 items, calculates and returns the price.
- Conditions:
    - Customers can get 10% on Total, if customers have a member card.
    - Order doubles of Orange, Pink or Green sets will get a 5% discount for each bundles (not in total)
- If you provide unit-tests; you will get an extra score.
- **Example:**
    - Desk#1: Customers order Red set and Green set; price from calculation is 90
    - Customers can use a member card, then the price should be deducted by discount amount 10%.
    - For Orange sets, if customers order 5 items per bill. customers will get a 5% discount for 4 items (2 pairs).

## Features

- Calculate total price for multiple food sets.
- Apply 5% bundle discounts for certain items (Orange, Pink, and Green).
- Apply a 10% member discount if the user has a member card.
- Show detailed breakdown of price calculations.

## Technologies Used

- **React** (for the UI)
- **JavaScript** (for the logic and calculations)
- **React Testing Library** (for unit tests)


## Code Structure

### 1. `src/App.js`

- Main component responsible for rendering the UI and handling state.
- Calculates the total price and applies the discounts based on the user input.

### 2. `src/DiscountUtils.js`

- Contains helper functions for applying bundle discounts.

### 4. `src/tests/FoodStoreCalculator.test.js`

- Unit tests for verifying that the discount logic and UI rendering work correctly.
