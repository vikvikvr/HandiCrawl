import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { useSubject } from "../../hooks/useSubject";
import { selectedMarker$ } from "../../services/stateService";

export function EditPlaceNameInput() {
  const [marker, setMarker] = useSubject(selectedMarker$);

  function updatePlaceName(placeName = "") {
    setMarker({ ...marker, placeName });
  }

  return (
    <View style={styles.locationContainer}>
      <Text style={[styles.generalText, styles.propertyText]}>
        Address detected. Feel free to modify it =)
      </Text>
      <View style={styles.editContainer}>
        <TextInput
          onChangeText={updatePlaceName}
          value={marker.placeName}
          style={[styles.generalText, styles.iconText, styles.placeNameText]}
        />
      </View>
    </View>
  );
}
