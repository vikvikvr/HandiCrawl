import React from "react";
import { EditNewMarkerInfo } from "./EditNewMarkerInfo";
import { render } from "@testing-library/react-native";
import * as mapService from "../../services/mapService";

jest.mock("react-native-btr");

const myMock = jest.fn();
mapService.tryToGetPlaceName = myMock;

beforeEach(jest.resetAllMocks);

describe("EditNewMarkerInfo", () => {
  it("should render without throwing", () => {
    render(<EditNewMarkerInfo />);
  });
  it("should try to get place name on mount", () => {
    expect(myMock).toHaveBeenCalledTimes(0);
    render(<EditNewMarkerInfo />);
    expect(myMock).toHaveBeenCalledTimes(1);
  });
  it("should render header", () => {
    const screen = render(<EditNewMarkerInfo />);
    screen.getByTestId("edit-icon-info-header");
  });
  it("should render name input", () => {
    const screen = render(<EditNewMarkerInfo />);
    screen.getByTestId("edit-place-name-input");
  });
  it("should render description input", () => {
    const screen = render(<EditNewMarkerInfo />);
    screen.getByTestId("edit-place-description-input");
  });
  it("should render send button", () => {
    const screen = render(<EditNewMarkerInfo />);
    screen.getByTestId("send-button");
  });
});
