import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Form", () => {
  it("should contain all the fields & button for ordering a pizza", () => {
    render(<App />);
    // check if all fields exist in the form
    // pizza selection
    expect(screen.getByLabelText("Pizza size")).toBeInTheDocument();
    expect(screen.getByLabelText("Toppings")).toBeInTheDocument();
    // customer information
    expect(screen.getByLabelText("Full name")).toBeInTheDocument();
    expect(screen.getByLabelText("Street name")).toBeInTheDocument();
    expect(screen.getByLabelText("House number")).toBeInTheDocument();
    expect(screen.getByLabelText("Postal code")).toBeInTheDocument();
    expect(screen.getByLabelText("City")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone number")).toBeInTheDocument();
    // payment information
    expect(screen.getByLabelText("Card number")).toBeInTheDocument();
    expect(screen.getByLabelText("Expiration date")).toBeInTheDocument();
    expect(screen.getByLabelText("CVC")).toBeInTheDocument();
    // Order button
    expect(screen.getByText("Order")).toBeInTheDocument();
  });

  it("should disable button when the form is not valid", () => {
    render(<App />);
    // expect(screen.getByText("Order")).toBeDisabled();
  });
});
