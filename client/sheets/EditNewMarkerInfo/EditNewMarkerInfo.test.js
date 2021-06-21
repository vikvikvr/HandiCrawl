import React from "react";
import { EditNewMarkerInfo } from "./EditNewMarkerInfo";
import { render } from "@testing-library/react-native";

jest.mock("react-native-btr");

describe("EditNewMarkerInfo", () => {
  it("should render without throwing", () => {
    render(<EditNewMarkerInfo />);
  });
});
