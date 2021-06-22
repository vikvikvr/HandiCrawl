import React from "react";
import { EditPlaceDescriptionInput } from "./EditPlaceDescriptionInput";
import { render, fireEvent } from "@testing-library/react-native";

describe("EditPlaceDescriptionInput", () => {
  it("should render without throwing", () => {
    render(<EditPlaceDescriptionInput />);
  });
  it("should show a helper text", () => {
    const { getByText } = render(<EditPlaceDescriptionInput />);
    getByText(/provide some details/i);
  });
  it("should modify marker data on text change", () => {
    const screen = render(<EditPlaceDescriptionInput />);
    const input = screen.getByPlaceholderText(/place description/i);
    fireEvent.changeText(input, "new-description");
    screen.getByDisplayValue("new-description");
  });
});
