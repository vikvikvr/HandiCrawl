import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { setModal } from "../../services/stateService";
import editIcon from "../../assets/edit.png";

export function EditButton() {
  const nextModal = "edit-existing-marker-info";

  return (
    <TouchableOpacity onPress={() => setModal(nextModal)}>
      <Image
        source={editIcon}
        style={[styles.trashIcon, styles.editIcon]}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}
