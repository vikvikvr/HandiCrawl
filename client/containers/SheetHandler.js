import React from "react";
import { useSubject } from "../hooks/useSubject";
import { currentSheet$ } from "../services/modalService";
import { AddIconBottomSheet } from "components/AddIconBottomSheet";

export function SheetHandler() {
  const [sheet] = useSubject(currentSheet$);

  const sheetsMap = {
    "add-icon": <AddIconBottomSheet />,
  };

  if (sheet in sheetsMap) {
    return sheetsMap[sheet];
  }

  return null;
}
