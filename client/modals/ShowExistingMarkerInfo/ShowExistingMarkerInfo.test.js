import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { ShowExistingMarkerInfo } from "./ShowExistingMarkerInfo";

describe("ShowExistingMarkerInfo", () => {
  it("should render without throwing error", () => {
    render(<ShowExistingMarkerInfo />);
  });
});
