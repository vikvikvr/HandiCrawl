import React from "react";
import { deleteMarker } from "../../services/markerService";

export function TrashButton() {
  return <ButtonIcon iconName="trash" onPress={deleteMarker} />;
}
