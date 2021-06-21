import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import { SendButton } from "./SendButton";

describe("SendButton", () => {
  it("should render without throwing error", () => {
    render(<SendButton />);
  });
});
