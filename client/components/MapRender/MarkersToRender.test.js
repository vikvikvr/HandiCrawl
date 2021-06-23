import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { MarkersToRender } from "./MarkersToRender";
import { defaultMarker, markers$, region$ } from "../../services/stateService";

describe("MarkersToRender", () => {
  it("should render without throwing", () => {
    render(<MarkersToRender />);
  });
  it("should render one element for each marker", () => {
    markers$.next([defaultMarker, defaultMarker]);
    const screen = render(<MarkersToRender />);
    const elements = screen.getAllByTestId("map-marker");
    expect(elements).toHaveLength(2);
  });
  it("should show an icon inside every marker", () => {
    markers$.next([defaultMarker, defaultMarker]);
    const screen = render(<MarkersToRender />);
    const markers = screen.getAllByTestId("marker-icon");
    expect(markers).toHaveLength(2);
  });
  it("should render nothing if too zoomed out", () => {
    region$.next({ ...region$.value, latitudeDelta: 1 });
    const screen = render(<MarkersToRender />);
    expect(screen.toJSON()).toEqual(null);
  });
});
