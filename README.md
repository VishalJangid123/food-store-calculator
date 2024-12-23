# Food Store Price Calculator

This is a simple **React** application for calculating the total price of food orders in a store. The store offers a fixed menu with 7 different sets, and allow to apply discounts based on certain conditions. 

## Live Demo
Visit link for live demo : https://vishaljangid123.github.io/food-store-calculator/

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
- **Github Pages** (Deploy)


## Screenshots

|    |    |
|------|------|
|![Screenshot 2567-12-16 at 22 19 37](https://github.com/user-attachments/assets/a03644d1-44d1-4992-a965-463208f33a3b) |![Screenshot 2567-12-16 at 22 20 06](https://github.com/user-attachments/assets/cd20d37e-b351-4c1f-a166-8854dabbd0e6) |


## Code Structure

### 1. `src/App.js`

- Main component responsible for rendering the UI and handling state.
- Calculates the total price and applies the discounts based on the user input.

### 2. `src/DiscountUtils.js`

- Contains helper functions for applying bundle discounts.

### 4. `src/tests/FoodStoreCalculator.test.js`

- Unit tests for verifying that the discount logic and UI rendering work correctly.

## Test Cases
Visit the details of the test cases https://github.com/VishalJangid123/food-store-calculator/tree/main/src/tests
### Latest test results
![Screenshot 2567-12-16 at 22 04 17](https://github.com/user-attachments/assets/f8ddf3cf-e519-4a75-b7c8-2df992faea97)



## Installation

1. Clone this repository:
    
    ```bash
    git clone https://github.com/VishalJangid123/food-store-calculator.git
    cd food-store-calculator
    ```
    
2. Install the dependencies:
    
    ```bash
    npm install
    ```
    
3. Start the development server:
    
    ```bash
    npm start
    ```
    
    This will open the app in your default browser. If not, navigate to http://localhost:3000.

### Running Tests

To run the unit tests for the application:

```bash
npm test
```

This will run all the test cases and give you feedback on whether they passed or failed.
