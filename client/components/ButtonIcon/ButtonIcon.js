import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { renderIcon } from "../../services/iconFactory";
import { styles } from "./styles";

export function ButtonIcon({ onPress, iconName }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={renderIcon(iconName)}
        style={[styles.trashIcon, styles.editIcon]}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}
