import React from "react";
import { TouchableOpacity, Image } from "react-native";
import trashIcon from "../../assets/trash.png";
import { deleteMarker } from "../../services/markerService";
import { styles } from "./styles";

export function TrashButton() {
  return (
    <TouchableOpacity onPress={deleteMarker}>
      <Image source={trashIcon} style={styles.trashIcon} resizeMode="contain" />
    </TouchableOpacity>
  );
}
