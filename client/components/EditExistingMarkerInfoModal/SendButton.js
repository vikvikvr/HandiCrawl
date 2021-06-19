import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useSubject } from "../../hooks/useSubject";
import {
  setModal,
  selectedMarker$,
  markers$,
} from "../../services/stateService";
import { styles } from "./styles";

export function SendButton() {
  const [marker] = useSubject(selectedMarker$);
  const [markers, setMarkers] = useSubject(markers$);

  function updateMarker() {
    // TODO: add marker to db
    setModal("");
    const { id } = marker;
    const newMarkers = markers.map((m) => {
      return m.id === id ? marker : m;
    });
    setMarkers(newMarkers);
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
