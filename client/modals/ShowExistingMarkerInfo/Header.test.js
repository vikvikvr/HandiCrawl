import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { Header } from "./Header";

describe("Header", () => {
  it("should render without throwing error", () => {
    render(<Header />);
  });
});
