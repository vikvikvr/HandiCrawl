import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { EditDescriptionInput } from "./EditDescriptionInput";

describe("EditDescriptionInput", () => {
  it("should render an input row to edit an exising marker description", () => {
    render(<EditDescriptionInput />);
  });
});
