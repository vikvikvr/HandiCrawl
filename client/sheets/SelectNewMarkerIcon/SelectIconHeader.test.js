import "react-native";
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { SelectIconHeader } from "./SelectIconHeader";
import * as stateService from "../../services/stateService";

const myMock = jest.fn();

stateService.setSheet = myMock;

describe("SelectIconHeader", () => {
  it("should render without throwing", () => {
    render(<SelectIconHeader />);
  });
  it("should display helper text", () => {
    const { getByText } = render(<SelectIconHeader />);
    getByText(/add a HandiMarker/i);
  });
  it("should close sheet on press", () => {
    const screen = render(<SelectIconHeader />);
    expect(myMock).toHaveBeenCalledTimes(0);
    const button = screen.getByTestId("touchable-wrapper");
    fireEvent.press(button);
    expect(myMock).toHaveBeenLastCalledWith("");
  });
});
