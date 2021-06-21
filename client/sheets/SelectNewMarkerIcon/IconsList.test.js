import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { IconsList } from "./IconsList";
import { allIcons } from "../../services/iconFactory";

describe("IconsList", () => {
  it("should render without throwing", () => {
    render(<IconsList />);
  });
  it("should render one marker for each icon", () => {
    const { getAllByTestId } = render(<IconsList />);
    const found = getAllByTestId("marker-icon");
    expect(found).toHaveLength(allIcons.length);
  });
});
