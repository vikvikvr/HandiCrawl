import React from "react";
import { EditIconInfoHeader } from "./EditIconInfoHeader";
import { render } from "@testing-library/react-native";

describe("EditIconInfoHeader", () => {
  it("should render without throwing", () => {
    render(<EditIconInfoHeader />);
  });
});
