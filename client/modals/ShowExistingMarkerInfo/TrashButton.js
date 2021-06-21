import React from "react";
import { deleteMarker } from "../../services/markerService";
import { ButtonIcon } from "../../components/ButtonIcon/ButtonIcon";

export function TrashButton() {
  return <ButtonIcon iconName="trash" onPress={deleteMarker} />;
}
