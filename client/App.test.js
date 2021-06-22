import "react-native";
import React from "react";
import { render, act, fireEvent } from "@testing-library/react-native";
import * as state from "./services/stateService";
import App from "./App";

describe("App", () => {
  it("should render without throwing", () => {
    render(<App />);
  });
  it("should render all children", () => {
    const screen = render(<App />);
    screen.getByTestId("app-header");
    screen.getByTestId("map-render");
    screen.getByTestId("search-bar");
    screen.getByTestId("top-right-info-icon");
  });
});

describe("Add new marker flow", () => {
  it("very big", () => {
    const screen = render(<App />);

    // check initial app state
    expect(state.bounds$.value).toEqual(state.defaultBounds);
    expect(state.marker$.value).toEqual(state.defaultMarker);
    expect(state.markers$.value).toEqual([]);
    expect(state.modal$.value).toEqual("");
    expect(state.region$.value).toEqual(state.defaultRegion);
    expect(state.sheet$.value).toEqual("");

    // press on map and store coordinates
    const coordinates = { latitude: 2, longitude: 3 };
    const newMarker = { ...state.marker$.value, ...coordinates };
    act(() => state.marker$.next(newMarker));
    act(() => state.sheet$.next("select-new-marker-icon"));

    // show SelectNewMarkerIcon sheet
    screen.getByTestId("select-new-marker-icon");

    // select marker icon
    const markerIcons = screen.getAllByTestId("marker-icon");
    const parkingIcon = markerIcons[3];
    fireEvent.press(parkingIcon);
    screen.getByText(/parking spot/i);

    // edit marker info
    const descriptionInput = screen.getByPlaceholderText(/place description/i);
    const nameInput = screen.getByPlaceholderText(/place name/i);
    fireEvent.changeText(descriptionInput, "no parking available");
    fireEvent.changeText(nameInput, "4 unicorn street");

    // press send button
    const sendButton = screen.getByText(/send/i);
    fireEvent.press(sendButton);

    // last sheet was closed
    const lastSheet = screen.queryByTestId("edit-new-marker-info");
    expect(lastSheet).toBe(null);

    // a new marker was added with the right info
    const lastMarker = state.markers$.value[state.markers$.value.length - 1];
    expect(lastMarker.icon).toEqual("parking");
    expect(lastMarker.description).toEqual("no parking available");
    expect(lastMarker.placeName).toEqual("4 unicorn street");
  });
});
