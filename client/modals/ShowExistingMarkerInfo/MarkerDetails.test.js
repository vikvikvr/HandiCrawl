import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { MarkerDetails } from "./MarkerDetails";

describe("MarkerDetails", () => {
  it("should render without throwing error", () => {
    render(<MarkerDetails />);
  });
});
