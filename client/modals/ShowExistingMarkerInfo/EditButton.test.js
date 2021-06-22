import "react-native";
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { EditButton } from "./EditButton";
import { modal$ } from "../../services/stateService";

describe("EditButton", () => {
  it("should render without throwing error", () => {
    render(<EditButton />);
  });
  it("should handle press event", () => {
    const screen = render(<EditButton />);
    const button = screen.getByTestId("touchable-wrapper");
    fireEvent.press(button);
    expect(modal$.value).toBe("edit-existing-marker-info");
  });
});
