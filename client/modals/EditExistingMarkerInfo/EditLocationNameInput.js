import React from "react";
import { View, TextInput } from "react-native";
import { useSubject } from "../../hooks/useSubject";
import { marker$ } from "../../services/stateService";
import { styles } from "./styles";

export function EditLocationNameInput() {
  const [marker, setMarker] = useSubject(marker$);

  return (
    <View style={styles.editContainer} testID="edit-location-name-input">
      <TextInput
        placeholder="Location name"
        style={[styles.generalText, styles.iconText, styles.placeNameText]}
        onChangeText={(placeName) => setMarker({ ...marker, placeName })}
        value={marker.placeName}
      />
    </View>
  );
}
