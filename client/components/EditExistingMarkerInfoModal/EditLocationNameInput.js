import React from "react";
import { View, TextInput } from "react-native";
import { useSubject } from "../../hooks/useSubject";
import { selectedMarker$ } from "../../services/stateService";
import { styles } from "./styles";

export function EditLocationNameInput() {
  const [marker, setMarker] = useSubject(selectedMarker$);

  function updateLocationName(locationName = "") {
    setMarker({ ...marker, locationName });
  }

  return (
    <View style={styles.editContainer}>
      <TextInput
        style={[styles.generalText, styles.iconText, styles.placeNameText]}
        onChangeText={updateLocationName}
        value={marker.locationName}
      />
    </View>
  );
}
