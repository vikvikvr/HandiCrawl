import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { SelectIconHeader } from "./SelectIconHeader";

describe("SelectIconHeader", () => {
  it("should render without throwing", () => {
    render(<SelectIconHeader />);
  });
  it("should display helper text", () => {
    const { getByText } = render(<SelectIconHeader />);
    getByText(/dd a HandiMarker/i);
  });
});
