import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { EditButton } from "./EditButton";

describe("EditButton", () => {
  it("should render without throwing error", () => {
    render(<EditButton />);
  });
});
