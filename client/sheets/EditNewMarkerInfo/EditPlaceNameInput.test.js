import React from "react";
import { EditPlaceNameInput } from "./EditPlaceNameInput";
import { render } from "@testing-library/react-native";

describe("EditPlaceNameInput", () => {
  it("should render without throwing", () => {
    render(<EditPlaceNameInput />);
  });
  it("should show a helper text", () => {
    const { getByText } = render(<EditPlaceNameInput />);
    getByText(/address detected/i);
  });
});
