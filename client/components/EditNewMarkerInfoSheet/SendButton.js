import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

export function SendButton({ onPress }) {
  return (
    <TouchableOpacity style={[styles.button]} onPress={onPress}>
      <Text style={[styles.generalText, styles.textStyle]}>Send</Text>
    </TouchableOpacity>
  );
}
