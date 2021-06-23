import "react-native";
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { MarkerVoteEditor } from "./MarkerVoteEditor";
import * as markerService from "../../services/markerService";

const voteMarkerSpy = jest.spyOn(markerService, "voteMarker");
afterEach(jest.resetAllMocks);

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
  it("should allow to vote marker up on press", () => {
    const screen = render(<MarkerVoteEditor />);
    const voteUp = screen.getAllByTestId("touchable-wrapper")[0];
    expect(voteMarkerSpy).toHaveBeenCalledTimes(0);
    fireEvent.press(voteUp);
    expect(voteMarkerSpy).toHaveBeenLastCalledWith(1);
  });
  it("should allow to vote marker down on press", () => {
    const screen = render(<MarkerVoteEditor />);
    const voteDown = screen.getAllByTestId("touchable-wrapper")[1];
    expect(voteMarkerSpy).toHaveBeenCalledTimes(0);
    fireEvent.press(voteDown);
    expect(voteMarkerSpy).toHaveBeenLastCalledWith(-1);
  });
});
