import React from "react";
import { View, TextInput } from "react-native";
import { useSubject } from "../../hooks/useSubject";
import { marker$ } from "../../services/stateService";
import { styles } from "./styles";

export function EditLocationNameInput() {
  const [marker, setMarker] = useSubject(marker$);

  function updateLocationName(placeName = "") {
    setMarker({ ...marker, placeName });
  }

  return (
    <View style={styles.editContainer}>
      <TextInput
        style={[styles.generalText, styles.iconText, styles.placeNameText]}
        onChangeText={updateLocationName}
        value={marker.placeName}
      />
    </View>
  );
}
