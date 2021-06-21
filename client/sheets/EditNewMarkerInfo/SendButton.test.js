import React from "react";
import { SendButton } from "./SendButton";
import { render } from "@testing-library/react-native";

describe("SendButton", () => {
  it("should render without throwing", () => {
    render(<SendButton />);
  });
  it('should show a "send" text ', () => {
    const { getByText } = render(<SendButton />);
    getByText(/send/i);
  });
});
