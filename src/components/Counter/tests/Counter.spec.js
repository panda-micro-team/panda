import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter"; // Adjust the path as necessary

// Mock IncreaseCounterButton component
jest.mock("../IncreaseCounterButton", () => ({
  IncreaseCounterButton: ({ onClick }) => <button onClick={onClick}>+</button>,
}));

describe("Counter component", () => {
  test("renders Counter component with initial count of 0", () => {
    render(<Counter />);

    // Check if the title and initial count are displayed
    expect(screen.getByText(/React Counter/i)).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  test('increments the counter when "+" button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByText("+");

    // Click increment button
    fireEvent.click(incrementButton);

    // Verify that count is updated to 1
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test('decrements the counter when "-" button is clicked', () => {
    render(<Counter />);
    const decrementButton = screen.getByText("-");

    // Click decrement button
    fireEvent.click(decrementButton);

    // Verify that count is updated to -1
    expect(screen.getByText("-1")).toBeInTheDocument();
  });
});
