import React from "react";
import { useSubject } from "../hooks/useSubject";
import { modal$ } from "../services/stateService";
// modals
import { MarkersKey } from "../modals/MarkersKey/MarkersKey";
import { EditExistingMarkerIcon } from "../modals/EditExistingMarkerIcon/EditExistingMarkerIcon";
import { EditExistingMarkerInfo } from "../modals/EditExistingMarkerInfo/EditExistingMarkerInfo";
import { ShowExistingMarkerInfo } from "../modals/ShowExistingMarkerInfo/ShowExistingMarkerInfo";

export const modalsMap = {
  "edit-existing-marker-icon": <EditExistingMarkerIcon />,
  "edit-existing-marker-info": <EditExistingMarkerInfo />,
  "show-existing-marker-info": <ShowExistingMarkerInfo />,
  "markers-key": <MarkersKey />,
};

export function ModalHandler() {
  const [modal] = useSubject(modal$);

  if (modal in modalsMap) {
    return modalsMap[modal];
  }

  return null;
}
