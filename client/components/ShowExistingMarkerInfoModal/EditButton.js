import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { setModal } from "../../services/stateService";
import editIcon from "../../assets/edit.png";

export function EditButton() {
  function showEditModal() {
    setModal("edit-existing-marker-info");
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
