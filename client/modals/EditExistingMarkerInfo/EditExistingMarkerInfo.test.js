import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { EditExistingMarkerInfo } from "./EditExistingMarkerInfo";

describe("EditExistingMarkerInfo", () => {
  it("should render modal to edit an existing marker's info", () => {
    render(<EditExistingMarkerInfo />);
  });
});
