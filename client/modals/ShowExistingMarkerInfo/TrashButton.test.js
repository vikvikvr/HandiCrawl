import "react-native";
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { TrashButton } from "./TrashButton";
import * as markerService from "../../services/markerService";

const myMock = jest.fn();

markerService.deleteMarker = myMock;

describe("TrashButton", () => {
  it("should render without throwing error", () => {
    render(<TrashButton />);
  });
  it("should allow to delete the marker on press", () => {
    const screen = render(<TrashButton />);
    expect(myMock).toHaveBeenCalledTimes(0);
    const button = screen.getByTestId("touchable-wrapper");
    fireEvent.press(button);
    expect(myMock).toHaveBeenCalledTimes(1);
  });
});
