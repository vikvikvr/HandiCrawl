import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { ButtonIcon } from "./ButtonIcon";

describe("ButtonIcon", () => {
  it("should render without throwing error", () => {
    render(<ButtonIcon />);
  });
});
