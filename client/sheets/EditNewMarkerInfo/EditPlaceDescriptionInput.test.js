import React from "react";
import { EditPlaceDescriptionInput } from "./EditPlaceDescriptionInput";
import { render } from "@testing-library/react-native";

describe("EditPlaceDescriptionInput", () => {
  it("should render without throwing", () => {
    render(<EditPlaceDescriptionInput />);
  });
  it("should show a helper text", () => {
    const { getByText } = render(<EditPlaceDescriptionInput />);
    getByText(/provide some details/i);
  });
});
