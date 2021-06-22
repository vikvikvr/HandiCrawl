import "react-native";
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { EditDescriptionInput } from "./EditDescriptionInput";

describe("EditDescriptionInput", () => {
  it("should render without throwing error", () => {
    render(<EditDescriptionInput />);
  });
  it("should show a place holder text", () => {
    const screen = render(<EditDescriptionInput />);
    screen.getByPlaceholderText(/place description/i);
  });
  it("should modify marker data on text change", () => {
    const screen = render(<EditDescriptionInput />);
    const input = screen.getByPlaceholderText(/place description/i);
    fireEvent.changeText(input, "new-description");
    screen.getByDisplayValue("new-description");
  });
});
