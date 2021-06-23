import React from "react";
import { View, Text } from "react-native";
import { useSubject } from "../../hooks/useSubject";
import { marker$ } from "../../services/stateService";
import { styles } from "./styles";

export function MarkerDetails() {
  const [marker] = useSubject(marker$);

  return (
    <View style={styles.middleBubble} testID="marker-details">
      <View style={styles.locationContainer}>
        <Text style={[styles.generalText, styles.placeNameText]}>
          {marker.placeName}
        </Text>
        <Text style={[styles.generalText, styles.descriptionText]}>
          {marker.description}
        </Text>
      </View>
    </View>
  );
}
