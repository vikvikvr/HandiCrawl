import "react-native";
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { IconsList } from "./IconsList";
import { allIcons, icons } from "../../services/iconFactory";
import { marker$ } from "../../services/stateService";

describe("IconsList", () => {
  it("should render without throwing error", () => {
    render(<IconsList />);
  });

  it("should render one marker for each icon", () => {
    const screen = render(<IconsList />);
    const buttons = screen.getAllByTestId("marker-icon");
    expect(buttons).toHaveLength(allIcons.length);
  });
  it("should render each marker name", () => {
    const screen = render(<IconsList />);
    allIcons.forEach((iconName) => {
      screen.getByText(icons[iconName].title);
    });
  });
  it("should store marker name on press", () => {
    const screen = render(<IconsList />);
    const buttons = screen.getAllByTestId("marker-icon");
    allIcons.forEach((iconName, i) => {
      fireEvent.press(buttons[i]);
      expect(marker$.value.icon).toBe(iconName);
    });
  });
});
