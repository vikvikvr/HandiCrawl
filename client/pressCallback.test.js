import { Text } from "react-native";
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

export default function Component({ handlePress }) {
  return <Text onPress={handlePress}>This is whatever!</Text>;
}

describe("pressCallback", () => {
  it("should fire callback on press", () => {
    const mockHandler = jest.fn();
    const screen = render(<Component handlePress={mockHandler} />);
    expect(mockHandler).toHaveBeenCalledTimes(0);
    const textElement = screen.getByText(/whatever/i);
    fireEvent.press(textElement);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
