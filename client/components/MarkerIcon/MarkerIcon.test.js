import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { MarkerIcon } from "./MarkerIcon";

describe("MarkerIcon", () => {
  it("should render marker icon", () => {
    render(<MarkerIcon />);
  });
});
