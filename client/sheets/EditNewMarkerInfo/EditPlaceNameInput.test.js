import React from "react";
import { EditPlaceNameInput } from "./EditPlaceNameInput";
import { render, fireEvent } from "@testing-library/react-native";

describe("EditPlaceNameInput", () => {
  it("should render without throwing", () => {
    render(<EditPlaceNameInput />);
  });
  it("should show a helper text", () => {
    const { getByText } = render(<EditPlaceNameInput />);
    getByText(/address detected/i);
  });
  it("should modify marker place name on text change", () => {
    const screen = render(<EditPlaceNameInput />);
    const input = screen.getByPlaceholderText(/place name/i);
    fireEvent.changeText(input, "new-place-name");
    screen.getByDisplayValue("new-place-name");
  });
});
