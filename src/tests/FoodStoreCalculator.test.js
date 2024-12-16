import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

const setOrder = (order) => {
  Object.keys(order).forEach((item) => {
    const input = screen.getByLabelText(new RegExp(`${item} Set`));
    fireEvent.change(input, { target: { value: order[item] } });
  });
};

// Test Case 1: Renders the correct total without discounts
test("calculates the total without discounts", () => {
  render(<App />);
  setOrder({ Red: 1, Green: 1 });
  expect(screen.getByText("Total: 90.00 THB")).toBeInTheDocument();
});

// Test Case 2: Apply Member Card Discount (10%)
test("applies a member card discount correctly", () => {
  render(<App />);
  setOrder({ Red: 1, Green: 1 });
  const memberCardCheckbox = screen.getByLabelText(/Use Member Card/);
  fireEvent.click(memberCardCheckbox);
  expect(screen.getByText("Total: 81.00 THB")).toBeInTheDocument();
});

// Test Case 3: Apply Orange Bundle Discount (5% per pair)
test("applies 5% discount for bundles of Orange sets", () => {
  render(<App />);

  setOrder({ Orange: 5 });

  // Expected calculation:
  // 5 * 120 = 600
  // 2 pairs of Orange => 2 * (5% of 120) = 2 * 6 = 12
  // Final total = 600 - 12 = 588 THB
  expect(screen.getByText("Total: 588.00 THB")).toBeInTheDocument();
});

// Test Case 4: Apply Pink Bundle Discount (5% per pair)
test("applies 5% discount for bundles of Pink sets", () => {
  render(<App />);

  setOrder({ Pink: 4 });

  // Expected calculation:
  // 4 * 80 = 320
  // 2 pairs of Pink => 2 * (5% of 80) = 2 * 4 = 8
  // Final total = 320 - 8 = 312 THB
  expect(screen.getByText("Total: 312.00 THB")).toBeInTheDocument();
});

// Test Case 5: Combined Discounts (Orange and Member Card)
test("applies both bundle and member card discounts correctly", () => {
  render(<App />);

  setOrder({ Orange: 4, Green: 1 });
  const memberCardCheckbox = screen.getByLabelText(/Use Member Card/);
  fireEvent.click(memberCardCheckbox);
  const totalText = screen.getByText(/Total:/).textContent;

  // The expected breakdown calculation:
  // Orange: 4 * 120 = 480
  // Green: 1 * 40 = 40
  // Total without discounts = 480 + 40 = 520
  // Bundle discount for Orange sets: 2 pairs of Orange => 2 * 6 = 12
  // Total after Orange bundle discount = 520 - 12 = 508
  // Member discount: 10% of 508 = 50.80
  // Final total = 508 - 50.80 = 457.20

  expect(totalText.trim()).toBe("Total: 457.20 THB");
});

// Test Case 6: Show/Hide Calculation Breakdown
test("toggles the breakdown visibility", () => {
  render(<App />);
  setOrder({ Red: 1, Orange: 1 });
  expect(screen.queryByText(/Price Breakdown/)).not.toBeInTheDocument();
  const toggleButton = screen.getByText(/Show Calculation Breakdown/);
  fireEvent.click(toggleButton);
  expect(screen.getByText("Price Breakdown")).toBeInTheDocument();
  fireEvent.click(toggleButton);
  expect(screen.queryByText(/Price Breakdown/)).not.toBeInTheDocument();
});

// Test Case 7: Apply Green Bundle Discount (5% per pair)
test("applies 5% discount for bundles of Green sets", () => {
  render(<App />);
  setOrder({ Green: 2 });
  // Expected calculation:
  // 2 * 40 = 80
  // 1 pair of Green => 1 * (5% of 40) = 1 * 2 = 2
  // Final total = 80 - 2 = 78 THB
  expect(screen.getByText("Total: 78.00 THB")).toBeInTheDocument();
});
