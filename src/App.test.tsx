import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { Toppings } from "./types";

describe("Form", () => {
  it("should contain all the fields & button for ordering a pizza", () => {
    render(<App />);
    // check if all fields exist in the form
    // pizza selection
    expect(screen.getByLabelText("Pizza size")).toBeInTheDocument();
    expect(screen.getByLabelText(Toppings.olives)).toBeInTheDocument();
    expect(screen.getByLabelText(Toppings.mushrooms)).toBeInTheDocument();
    expect(screen.getByLabelText(Toppings.pepper)).toBeInTheDocument();
    expect(screen.getByLabelText(Toppings.pepperoni)).toBeInTheDocument();
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

  // TODO: do the same for all the inputs
  it("should show an error message when payment card number is invalid", async () => {
    render(<App />);
    const paymentCardInput = screen.getByLabelText("Card number");
    const orderButton = screen.getByText("Order");

    fireEvent.change(paymentCardInput, { target: { value: "1234 4321" } });
    fireEvent.click(orderButton);

    expect(
      await screen.findByText("Card number is invalid")
    ).toBeInTheDocument();
  });
});
