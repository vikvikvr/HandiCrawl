import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { EditIconRow } from "./EditIconRow";

describe("EditIconRow", () => {
  it("should render the row to edit an existing icon", () => {
    render(<EditIconRow />);
  });
});
