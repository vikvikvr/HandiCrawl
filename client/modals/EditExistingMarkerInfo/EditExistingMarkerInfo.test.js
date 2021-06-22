import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { EditExistingMarkerInfo } from "./EditExistingMarkerInfo";

describe("EditExistingMarkerInfo", () => {
  it("should render without throwing error", () => {
    render(<EditExistingMarkerInfo />);
  });
  it("should show all text", () => {
    const screen = render(<EditExistingMarkerInfo />);
    screen.getByText(/edit handimarker/i);
    screen.getByText(/edit icon/i);
    screen.getByText(/edit location/i);
    screen.getByText(/edit description/i);
  });
  it("should render all the children", () => {
    const screen = render(<EditExistingMarkerInfo />);
    screen.getByTestId("edit-icon-row");
    screen.getByTestId("edit-location-name-input");
    screen.getByTestId("edit-description-input");
    screen.getByTestId("send-button");
  });
});
