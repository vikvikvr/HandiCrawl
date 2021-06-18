import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { setModal } from "../../services/stateService";
import editIcon from "../../assets/edit.png";

export function EditButton() {
  function showEditModal() {
    const goToModal = "edit-esisting-marker-info";
    setModal(goToModal);
  }

  return (
    <TouchableOpacity onPress={showEditModal}>
      <Image
        source={editIcon}
        style={[styles.trashIcon, styles.editIcon]}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}
