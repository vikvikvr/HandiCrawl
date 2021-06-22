import React from "react";
import { View } from "react-native";
import { BottomSheet } from "react-native-btr";
import { SelectIconHeader } from "./SelectIconHeader";
import { IconsList } from "./IconsList";
import { setSheet } from "../../services/stateService";
import { styles } from "./styles";

// video: 1:05
export function SelectNewMarkerIcon() {
  return (
    <BottomSheet
      onBackButtonPress={() => setSheet("")}
      onBackdropPress={() => setSheet("")}
      style={styles.bottomSheet}
    >
      <View style={styles.bottomNavigationView} testID="select-new-marker-icon">
        <SelectIconHeader />
        <IconsList />
      </View>
    </BottomSheet>
  );
}
