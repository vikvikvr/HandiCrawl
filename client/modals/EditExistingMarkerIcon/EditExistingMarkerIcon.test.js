import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { EditExistingMarkerIcon } from "./EditExistingMarkerIcon";

describe("EditExistingMarkerIcon", () => {
  it("should render without throwing error", () => {
    render(<EditExistingMarkerIcon />);
  });
});
