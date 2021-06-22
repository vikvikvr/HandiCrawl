import "react-native";
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { MarkerVoteEditor } from "./MarkerVoteEditor";
import * as markerService from "../../services/markerService";

describe("MarkerVoteEditor", () => {
  it("should render without throwing error", () => {
    render(<MarkerVoteEditor />);
  });
  it("should show vote score", () => {
    const screen = render(<MarkerVoteEditor />);
    screen.getByText("0");
  });
  it("should show vote up and down button", () => {
    const screen = render(<MarkerVoteEditor />);
    const buttons = screen.getAllByTestId("touchable-wrapper");
    expect(buttons).toHaveLength(2);
  });
  it("should allow to vote marker on press", () => {
    const voteMarkerSpy = jest.spyOn(markerService, "voteMarker");
    const screen = render(<MarkerVoteEditor />);
    const [voteUp, voteDown] = screen.getAllByTestId("touchable-wrapper");
    expect(voteMarkerSpy).toHaveBeenCalledTimes(0);
    fireEvent.press(voteUp);
    expect(voteMarkerSpy).toHaveBeenLastCalledWith(1);
    fireEvent.press(voteDown);
    expect(voteMarkerSpy).toHaveBeenLastCalledWith(-1);
  });
});
