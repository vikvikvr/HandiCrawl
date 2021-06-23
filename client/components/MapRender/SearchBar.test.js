import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { SearchBar } from "./SearchBar";

describe("SearchBar", () => {
  it("should render without throwing", () => {
    render(<SearchBar />);
  });
  it("should show a place holder text", () => {
    const screen = render(<SearchBar />);
    screen.getByPlaceholderText(/search location/i);
  });
});
