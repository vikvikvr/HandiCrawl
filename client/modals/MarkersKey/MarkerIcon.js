import React from "react";
import { View, Image, Text } from "react-native";
import { renderIcon, renderDescr } from "../../services/iconFactory";
import { styles } from "./styles";

export function MarkerIcon({ icon }) {
  const source = renderIcon(icon);
  const description = renderDescr(icon);

  return (
    <View style={styles.infoContainer}>
      <Image style={styles.iconImg} source={source} resizeMode="contain" />
      <Text style={styles.generalText}>{description}</Text>
    </View>
  );
}
