import "react-native";
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { MarkerIcon } from "./MarkerIcon";

describe("MarkerIcon", () => {
  it("should render without throwing error", () => {
    render(<MarkerIcon />);
  });
  it("should respond to press events", () => {
    const pressHandler = jest.fn();
    const screen = render(<MarkerIcon onPress={pressHandler} />);
    expect(pressHandler).toHaveBeenCalledTimes(0);
    const button = screen.getByTestId("marker-icon");
    fireEvent.press(button);
    expect(pressHandler).toHaveBeenCalledTimes(1);
  });
});
