import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { saveMarkerChanges } from "../../services/markerService";
import { styles } from "./styles";

export function SendButton() {
  return (
    <View style={styles.sendButton}>
      <TouchableOpacity onPress={saveMarkerChanges}>
        <Text style={[styles.generalText, styles.sendButtonUpdate]}>
          Send Update
        </Text>
      </TouchableOpacity>
    </View>
  );
}
