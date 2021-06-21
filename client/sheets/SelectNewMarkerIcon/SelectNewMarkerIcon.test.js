import React from "react";
import { SelectNewMarkerIcon } from "./SelectNewMarkerIcon";
import { render } from "@testing-library/react-native";

jest.mock("react-native-btr");

describe("SelectNewMarkerIcon", () => {
  it("should render without throwing", () => {
    render(<SelectNewMarkerIcon />);
  });
});
