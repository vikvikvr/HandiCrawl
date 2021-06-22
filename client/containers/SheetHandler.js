import React from "react";
import { useSubject } from "../hooks/useSubject";
import { sheet$ } from "../services/stateService";
// sheets
import { EditNewMarkerInfo } from "../sheets/EditNewMarkerInfo/EditNewMarkerInfo";
import { SelectNewMarkerIcon } from "../sheets/SelectNewMarkerIcon/SelectNewMarkerIcon";

export const sheetsMap = {
  "edit-new-marker-info": <EditNewMarkerInfo />,
  "select-new-marker-icon": <SelectNewMarkerIcon />,
};

export function SheetHandler() {
  const [sheet] = useSubject(sheet$);

  if (sheet in sheetsMap) {
    return sheetsMap[sheet];
  }

  return null;
}
