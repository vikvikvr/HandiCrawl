import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { renderIcon } from "../../services/iconFactory";
import { makeStyles } from "./styles";

export function MarkerIcon({ iconName, isLarge, hasBorder, onPress }) {
  const source = renderIcon(iconName);
  const styles = makeStyles(isLarge, hasBorder);

  return (
    <TouchableOpacity onPress={onPress} testID="marker-icon">
      <View style={styles.infoContainer}>
        <Image style={styles.iconImg} source={source} resizeMode="contain" />
      </View>
    </TouchableOpacity>
  );
}
