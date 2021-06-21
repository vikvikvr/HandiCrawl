import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { TrashButton } from "./TrashButton";

describe("TrashButton", () => {
  it("should render without throwing error", () => {
    render(<TrashButton />);
  });
});
