import React from "react";
import { TouchableOpacity, Image } from "react-native";
import trashIcon from "../../assets/trash.png";
import { styles } from "./styles";

export function TrashButton() {
  function deleteMarker() {
    // TODO: remove current marker from state
    // remove current marker from db
    // close modal
  }

  return (
    <TouchableOpacity onPress={deleteMarker}>
      <Image source={trashIcon} style={styles.trashIcon} resizeMode="contain" />
    </TouchableOpacity>
  );
}
