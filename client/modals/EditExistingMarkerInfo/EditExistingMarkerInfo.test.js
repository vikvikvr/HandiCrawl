import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { EditExistingMarkerInfo } from "./EditExistingMarkerInfo";

describe("EditExistingMarkerInfo", () => {
  it("should render without throwing error", () => {
    render(<EditExistingMarkerInfo />);
  });
});
