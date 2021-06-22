import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { Header } from "./Header";

describe("Header", () => {
  it("should render without throwing error", () => {
    render(<Header />);
  });
  it("should render a marker vote editor", () => {
    const screen = render(<Header />);
    screen.getByTestId("marker-vote-editor");
  });
  it("should render a trash button", () => {
    const screen = render(<Header />);
    screen.getByTestId("trash-button");
  });
  it("should render a edit button", () => {
    const screen = render(<Header />);
    screen.getByTestId("edit-button");
  });
});
