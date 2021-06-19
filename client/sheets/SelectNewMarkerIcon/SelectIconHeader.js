import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { renderIcon } from "../../services/iconFactory";
import { setSheet } from "../../services/stateService";
import { styles } from "./styles";

export function SelectIconHeader() {
  return (
    <View>
      <Text style={[styles.generalText, styles.header]}>Add a HandiMarker</Text>
      <CloseIcon />
    </View>
  );
}

function CloseIcon() {
  return (
    <View style={styles.closeIconContainer}>
      <TouchableOpacity onPress={() => setSheet("")}>
        <Image
          source={renderIcon("closeIcon")}
          resizeMode="contain"
          style={styles.closeIconImg}
        />
      </TouchableOpacity>
    </View>
  );
}
