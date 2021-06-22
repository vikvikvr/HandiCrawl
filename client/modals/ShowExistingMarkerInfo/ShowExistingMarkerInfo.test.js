import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { ShowExistingMarkerInfo } from "./ShowExistingMarkerInfo";

describe("ShowExistingMarkerInfo", () => {
  it("should render without throwing error", () => {
    render(<ShowExistingMarkerInfo />);
  });
  it("should render marker info header", () => {
    const screen = render(<ShowExistingMarkerInfo />);
    screen.getByTestId("header");
  });
  it("should render marker info details", () => {
    const screen = render(<ShowExistingMarkerInfo />);
    screen.getByTestId("marker-details");
  });
});
