import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { MarkerDetails } from "./MarkerDetails";
import { marker$ } from "../../services/stateService";

describe("MarkerDetails", () => {
  it("should render without throwing error", () => {
    render(<MarkerDetails />);
  });
  it("should display the place name", () => {
    const screen = render(<MarkerDetails />);
    screen.getByText(marker$.value.placeName);
  });
  it("should display the description", () => {
    const screen = render(<MarkerDetails />);
    screen.getByText(marker$.value.description);
  });
});
