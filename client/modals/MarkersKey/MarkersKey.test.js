import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { MarkersKey } from "./MarkersKey";

describe("MarkersKey", () => {
  it("should render without throwing error", () => {
    render(<MarkersKey />);
  });
  it("should render list of icons", () => {
    const screen = render(<MarkersKey />);
    screen.getByTestId("icons-list");
  });
});
