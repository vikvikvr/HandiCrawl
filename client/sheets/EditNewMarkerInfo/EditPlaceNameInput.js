import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { useSubject } from "../../hooks/useSubject";
import { marker$ } from "../../services/stateService";

export function EditPlaceNameInput() {
  const [marker, setMarker] = useSubject(marker$);

  return (
    <View style={styles.locationContainer}>
      <Text style={[styles.generalText, styles.propertyText]}>
        Address detected. Feel free to modify it =)
      </Text>
      <View style={styles.editContainer}>
        <TextInput
          onChangeText={(placeName) => setMarker({ ...marker, placeName })}
          value={marker.placeName}
          style={[styles.generalText, styles.iconText, styles.placeNameText]}
        />
      </View>
    </View>
  );
}
