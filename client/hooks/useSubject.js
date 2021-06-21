import { useEffect, useState } from "react";

export function useSubject(subject$) {
  const [value, setValue] = useState(subject$.value);
  useEffect(handleSubscription, []);

  function handleSubscription() {
    const subscription = subject$.subscribe((newValue) => {
      setValue(newValue);
    });
    return () => {
      subscription.unsubscribe();
    };
  }

  function changeValue(newValue) {
    subject$.next(newValue);
    setValue(newValue);
  }

  return [value, changeValue];
}
