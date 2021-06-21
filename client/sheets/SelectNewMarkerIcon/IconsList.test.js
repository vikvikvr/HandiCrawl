import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { IconsList } from "./IconsList";

describe("IconsList", () => {
  it("should render without throwing", () => {
    render(<IconsList />);
  });
});
