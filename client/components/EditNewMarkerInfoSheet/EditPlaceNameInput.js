import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";

export function EditPlaceNameInput({ placeName, onChangeText }) {
  return (
    <View style={styles.locationContainer}>
      <Text style={[styles.generalText, styles.propertyText]}>
        Address detected. Feel free to modify it =)
      </Text>
      <View style={styles.editContainer}>
        <TextInput
          onChangeText={onChangeText}
          value={placeName}
          style={[styles.generalText, styles.iconText, styles.placeNameText]}
        />
      </View>
    </View>
  );
}
