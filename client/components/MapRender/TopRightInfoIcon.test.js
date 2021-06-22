import "react-native";
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { TopRightInfoIcon } from "./TopRightInfoIcon";
import { modal$ } from "../../services/stateService";

describe("TopRightInfoIcon", () => {
  it("should render without throwing", () => {
    render(<TopRightInfoIcon />);
  });
  it("should open markers-key modal on press", () => {
    const screen = render(<TopRightInfoIcon />);
    expect(modal$.value).toBe("");
    const button = screen.getByTestId("touchable-wrapper");
    fireEvent.press(button);
    expect(modal$.value).toBe("markers-key");
  });
});
