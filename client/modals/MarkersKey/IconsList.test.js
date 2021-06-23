import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { IconsList } from "./IconsList";
import { allIcons } from "../../services/iconFactory";

describe("IconsList", () => {
  it("should render without throwing error", () => {
    render(<IconsList />);
  });
  it("should render one marker for each icon", () => {
    const screen = render(<IconsList />);
    const markers = screen.getAllByTestId("marker-icon");
    expect(markers).toHaveLength(allIcons.length);
  });
});
