import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { MarkerVoteEditor } from "./MarkerVoteEditor";

describe("MarkerVoteEditor", () => {
  it("should render without throwing error", () => {
    render(<MarkerVoteEditor />);
  });
});
