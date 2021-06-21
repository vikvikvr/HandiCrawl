import "react-native";
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { ButtonIcon } from "./ButtonIcon";

describe("ButtonIcon", () => {
  it("should render without throwing", () => {
    render(<ButtonIcon />);
  });
  it("should respond to press events", () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<ButtonIcon onPress={onPress} />);
    const button = getByTestId("touchable-wrapper");
    expect(onPress).toHaveBeenCalledTimes(0);
    fireEvent.press(button);
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
