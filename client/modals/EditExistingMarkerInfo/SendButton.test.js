import "react-native";
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { SendButton } from "./SendButton";
import * as markerService from "../../services/markerService";

const myMock = jest.fn();
markerService.saveMarkerChanges = myMock;

describe("SendButton", () => {
  it("should render without throwing error", () => {
    render(<SendButton />);
  });
  it("should show button text", () => {
    const screen = render(<SendButton />);
    screen.getByText(/send update/i);
  });
  it("should handle press events", () => {
    const screen = render(<SendButton />);
    const button = screen.getByText(/send update/i);
    expect(myMock).toHaveBeenCalledTimes(0);
    fireEvent.press(button);
    expect(myMock).toHaveBeenCalledTimes(1);
  });
});
