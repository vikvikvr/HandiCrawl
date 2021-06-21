import "react-native";
import React from "react";
import { render, act } from "@testing-library/react-native";
import { ModalHandler, modalsMap } from "./ModalHandler";
import { modal$ } from "../services/stateService";

describe("ModalHandler", () => {
  it("should render without throwing", () => {
    render(<ModalHandler />);
  });
  it("should render the right modal", () => {
    Object.keys(modalsMap).forEach((modalName) => {
      act(() => modal$.next(modalName));
      const screen = render(<ModalHandler />);
      screen.getByTestId(modalName);
    });
  });
  it("should render nothing with invalid modal name", () => {
    const screen = render(<ModalHandler />);
    act(() => modal$.next("invalid-modal-name"));
    expect(screen.toJSON()).toEqual(null);
  });
});
