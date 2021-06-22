import "react-native";
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { EditIconRow } from "./EditIconRow";
import { marker$, modal$ } from "../../services/stateService";

describe("EditIconRow", () => {
  it("should render without throwing error", () => {
    render(<EditIconRow />);
  });
  it("should show the marker name", () => {
    marker$.next({ ...marker$.value, icon: "warning" });
    const screen = render(<EditIconRow />);
    screen.getByText(/warning/i);
  });
  it("should open edit marker icon modal on press", () => {
    const screen = render(<EditIconRow />);
    expect(modal$.value).toBe("");
    const button = screen.getByTestId("touchable-wrapper");
    fireEvent.press(button);
    expect(modal$.value).toBe("edit-existing-marker-icon");
  });
  it("should render the marker icon", () => {
    const screen = render(<EditIconRow />);
    screen.getByTestId("marker-icon");
  });
});
