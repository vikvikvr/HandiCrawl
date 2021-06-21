import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { EditLocationNameInput } from "./EditLocationNameInput";

describe("EditLocationNameInput", () => {
  it("should render input to edit a marker's location", () => {
    render(<EditLocationNameInput />);
  });
});
