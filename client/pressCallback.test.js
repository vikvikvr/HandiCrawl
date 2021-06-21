import { Text } from "react-native";
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

export default function Component({ handlePress, name }) {
  return <Text onPress={() => handlePress(name)}>This is whatever!</Text>;
}

describe("pressCallback", () => {
  it("should fire callback on press", () => {
    const mockHandler = jest.fn();
    const screen = render(<Component handlePress={mockHandler} name="Ian" />);
    expect(mockHandler).toHaveBeenCalledTimes(0);
    const textElement = screen.getByText(/whatever/i);
    fireEvent.press(textElement);
    expect(mockHandler).toHaveBeenLastCalledWith("Ian");
  });
});
