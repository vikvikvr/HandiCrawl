import React from "react";
import { setModal } from "../../services/stateService";

export function EditButton() {
  const nextModal = "edit-existing-marker-info";

  return <ButtonIcon iconName="edit" onPress={() => setModal(nextModal)} />;
}
