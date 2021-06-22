import "react-native";
import React from "react";
import { render, act } from "@testing-library/react-native";
import { SheetHandler, sheetsMap } from "./SheetHandler";
import { sheet$ } from "../services/stateService";

describe("SheetHandler", () => {
  it("should render without throwing", () => {
    render(<SheetHandler />);
  });
  it("should render the right sheet", () => {
    Object.keys(sheetsMap).forEach((sheetName) => {
      act(() => sheet$.next(sheetName));
      const screen = render(<SheetHandler />);
      screen.getByTestId(sheetName);
    });
  });
  it("should render nothing with invalid sheet name", () => {
    const screen = render(<SheetHandler />);
    act(() => sheet$.next("invalid-sheet-name"));
    expect(screen.toJSON()).toEqual(null);
  });
});
