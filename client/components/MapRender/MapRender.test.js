import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { MapRender } from "./MapRender";

jest.mock("react-native-maps");

describe("MapRender", () => {
  it("should render without throwing", () => {
    render(<MapRender />);
  });
  it("should render a list of markers", () => {
    const screen = render(<MapRender />);
    screen.getByTestId("markers-list");
  });
});
