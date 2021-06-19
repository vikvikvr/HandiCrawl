import React from "react";
import { View, Text } from "react-native";
import { setSheet } from "../../services/stateService";
import { styles } from "./styles";
import { ButtonIcon } from "../../components/ButtonIcon/ButtonIcon";

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
      <ButtonIcon iconName="close" onPress={() => setSheet("")} />
    </View>
  );
}
