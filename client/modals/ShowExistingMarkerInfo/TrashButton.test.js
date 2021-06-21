import "react-native";
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { TrashButton } from "./TrashButton";
import * as markerService from "../../services/markerService";

const deleteMarkerSpy = jest.spyOn(markerService, "deleteMarker");

describe("TrashButton", () => {
  it("should render without throwing error", () => {
    render(<TrashButton />);
  });

  it("should fire callback on press", () => {
    const screen = render(<TrashButton />);
    expect(deleteMarkerSpy).toHaveBeenCalledTimes(0);
    const buttonElement = screen.getByTestId("touchable-wrapper");
    fireEvent.press(buttonElement);
    expect(deleteMarkerSpy).toHaveBeenCalledTimes(1);
  });
});
