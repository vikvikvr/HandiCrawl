import React from "react";
import { SelectNewMarkerIcon } from "./SelectNewMarkerIcon";
import { render } from "@testing-library/react-native";

jest.mock("react-native-btr");

describe("SelectNewMarkerIcon", () => {
  it("should render without throwing", () => {
    render(<SelectNewMarkerIcon />);
  });
  it("should render the header", () => {
    const screen = render(<SelectNewMarkerIcon />);
    screen.getByTestId("select-icon-header");
  });
  it("should render the icons list", () => {
    const screen = render(<SelectNewMarkerIcon />);
    screen.getByTestId("icons-list");
  });
});
