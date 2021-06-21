import React from "react";
import { setModal } from "../../services/stateService";
import { ButtonIcon } from "../../components/ButtonIcon/ButtonIcon";

export function EditButton() {
  const nextModal = "edit-existing-marker-info";

  return <ButtonIcon iconName="edit" onPress={() => setModal(nextModal)} />;
}
