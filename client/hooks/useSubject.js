import { useEffect, useState } from "react";

export function useSubject(subject$) {
  const [value, setValue] = useState(subject$.value);
  useEffect(handleSubscription, []);

  function handleSubscription() {
    subject$.subscribe((newValue) => {
      setValue(newValue);
    });
    return () => {
      subject$.unsubscribe();
    };
  }

  function changeValue(newValue) {
    subject$.next(newValue);
    setValue(newValue);
  }

  return [value, changeValue];
}
