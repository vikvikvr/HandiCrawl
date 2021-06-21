import React from "react";
import { SendButton } from "./SendButton";
import { render, fireEvent } from "@testing-library/react-native";
import * as markerService from "../../services/markerService";

const saveNewMarkerSpy = jest.spyOn(markerService, "saveNewMarker");
const buttonText = /send/i;

describe("SendButton", () => {
  it("should render without throwing", () => {
    render(<SendButton />);
  });
  it('should show a "send" text ', () => {
    const { getByText } = render(<SendButton />);
    getByText(buttonText);
  });
  it("should save a new marker on press", () => {
    const { getByText } = render(<SendButton />);
    expect(saveNewMarkerSpy).toHaveBeenCalledTimes(0);
    const button = getByText(buttonText);
    fireEvent.press(button);
    expect(saveNewMarkerSpy).toHaveBeenCalledTimes(1);
  });
});
