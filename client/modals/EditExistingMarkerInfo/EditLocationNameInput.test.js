import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { EditLocationNameInput } from "./EditLocationNameInput";

describe("EditLocationNameInput", () => {
  it("should render without throwing error", () => {
    render(<EditLocationNameInput />);
  });
});
