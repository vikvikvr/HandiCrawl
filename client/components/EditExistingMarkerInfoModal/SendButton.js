import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useSubject } from "../../hooks/useSubject";
import { setModal, selectedMarker$ } from "../../services/stateService";
import { styles } from "./styles";

export function SendButton() {
  const [marker, setMarker] = useSubject(selectedMarker$);

  function updateMarker() {
    // TODO: add marker (to state and to db)
    setModal("");
    setMarker({});
  }

  return (
    <View style={styles.sendButton}>
      <TouchableOpacity onPress={updateMarker}>
        <Text style={[styles.generalText, styles.sendButtonUpdate]}>
          Send Update
        </Text>
      </TouchableOpacity>
    </View>
  );
}
