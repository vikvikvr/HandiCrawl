import React from "react";
import { EditIconInfoHeader } from "./EditIconInfoHeader";
import { render } from "@testing-library/react-native";
import { marker$ } from "../../services/stateService";

describe("EditIconInfoHeader", () => {
  it("should render without throwing", () => {
    render(<EditIconInfoHeader />);
  });
  it("should render marker icon", () => {
    const screen = render(<EditIconInfoHeader />);
    screen.getByTestId("marker-icon");
  });
  it("should render marker icon name", () => {
    marker$.next({ ...marker$.value, icon: "warning" });
    const screen = render(<EditIconInfoHeader />);
    screen.getByText(/warning/i);
  });
});
