import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { EditIconRow } from "./EditIconRow";

describe("EditIconRow", () => {
  it("should render without throwing error", () => {
    render(<EditIconRow />);
  });
});
