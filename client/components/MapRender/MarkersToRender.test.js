import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { MarkersToRender } from "./MarkersToRender";
import { defaultMarker, markers$ } from "../../services/stateService";

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
});
