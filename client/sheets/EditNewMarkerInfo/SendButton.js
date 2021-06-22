import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { saveNewMarker } from "../../services/markerService";

export function SendButton() {
  return (
    <TouchableOpacity
      style={[styles.button]}
      onPress={saveNewMarker}
      testID="send-button"
    >
      <Text style={[styles.generalText, styles.textStyle]}>Send</Text>
    </TouchableOpacity>
  );
}
