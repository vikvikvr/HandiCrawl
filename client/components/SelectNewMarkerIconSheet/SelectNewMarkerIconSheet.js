import React from "react";
import { BottomSheet, View } from "react-native";
import { SelectIconHeader } from "./SelectIconHeader";
import { IconsList } from "./IconsList";
import { setSheet } from "../../services/stateService";
import { styles } from "./styles";

// video: 1:05
export function SelectNewMarkerIconSheet() {
  return (
    <BottomSheet
      onBackButtonPress={() => setSheet("")}
      onBackdropPress={() => setSheet("")}
      style={styles.bottomSheet}
    >
      <View style={styles.bottomNavigationView}>
        <SelectIconHeader />
        <IconsList />
      </View>
    </BottomSheet>
  );
}
