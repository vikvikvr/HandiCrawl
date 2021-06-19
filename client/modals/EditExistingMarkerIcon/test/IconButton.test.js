import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { IconButton } from "../IconButton";

describe("IconButton", () => {
  it("shows the right text", () => {
    expect(1).toBe(1);
    const { getByText } = render(<IconButton iconName="warning" />);
    getByText("Warning");
  });
});
