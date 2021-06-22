import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { EditExistingMarkerIcon } from "./EditExistingMarkerIcon";

describe("EditExistingMarkerIcon", () => {
  it("should render without throwing error", () => {
    render(<EditExistingMarkerIcon />);
  });
  it("should show title text", () => {
    const screen = render(<EditExistingMarkerIcon />);
    screen.getByText(/choose your icon/i);
  });
  it("should render a list of icons", () => {
    const screen = render(<EditExistingMarkerIcon />);
    screen.getByTestId("icons-list");
  });
});
