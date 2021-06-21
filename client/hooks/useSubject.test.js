import React, { useEffect } from "react";
import { useSubject } from "./useSubject";
import { BehaviorSubject } from "rxjs";
import { Text } from "react-native";
import { act, render, waitFor } from "@testing-library/react-native";

let subject$;

beforeEach(() => {
  subject$ = new BehaviorSubject(false);
});

function Component() {
  const [value, setValue] = useSubject(subject$);
  useEffect(updateStateAsync, []);

  function updateStateAsync() {
    const id = setTimeout(() => setValue(true), 250);
    return () => clearTimeout(id);
  }

  return <Text>{value ? "true" : "false"}</Text>;
}

describe("useSubject", () => {
  it("should execute without throwing", () => {
    render(<Component />);
  });
  it("should give the state the initial value", () => {
    const { getByText } = render(<Component />);
    getByText("false");
  });
  it("should respond to subject changes", () => {
    const { getByText } = render(<Component />);
    act(() => subject$.next(true));
    getByText("true");
  });
  it("should be able to modify subject", async () => {
    const { getByText } = render(<Component />);
    await waitFor(() => getByText("true"));
    expect(subject$.value).toBe(true);
  });
});
