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
    const document = render(<IconsList />);
    const buttons = document.getAllByTestId("marker-icon");
    expect(buttons).toHaveLength(allIcons.length);
  });
});
