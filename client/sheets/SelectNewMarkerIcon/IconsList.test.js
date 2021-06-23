import "react-native";
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { IconsList } from "./IconsList";
import { allIcons } from "../../services/iconFactory";
import * as markerService from "../../services/markerService";

const myMock = jest.fn();

markerService.selectNewMarkerIcon = myMock;

describe("IconsList", () => {
  it("should render without throwing", () => {
    render(<IconsList />);
  });
  it("should render one marker for each icon", () => {
    const { getAllByTestId } = render(<IconsList />);
    const buttons = getAllByTestId("marker-icon");
    expect(buttons).toHaveLength(allIcons.length);
  });
  it("should pass iconName to press handler", () => {
    const { getAllByTestId } = render(<IconsList />);
    const buttons = getAllByTestId("marker-icon");
    fireEvent.press(buttons[0]);
    expect(myMock).toHaveBeenLastCalledWith(allIcons[0]);
    fireEvent.press(buttons[3]);
    expect(myMock).toHaveBeenLastCalledWith(allIcons[3]);
  });
});
