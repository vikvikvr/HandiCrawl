import "react-native";
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { EditLocationNameInput } from "./EditLocationNameInput";

describe("EditLocationNameInput", () => {
  it("should render without throwing error", () => {
    render(<EditLocationNameInput />);
  });
  it("should show a place holder text", () => {
    const screen = render(<EditLocationNameInput />);
    screen.getByPlaceholderText(/location name/i);
  });
  it("should modify marker location name on text change", () => {
    const screen = render(<EditLocationNameInput />);
    const input = screen.getByPlaceholderText(/location name/i);
    fireEvent.changeText(input, "new-place");
    screen.getByDisplayValue("new-place");
  });
});
