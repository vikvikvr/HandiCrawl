import React from "react";
import { View } from "react-native";
import { EditNewMarkerInfoSheet } from "./EditNewMarkerInfoSheet/EditNewMarkerInfoSheet";
import { SelectNewMarkerIconSheet } from "./SelectNewMarkerIconSheet/SelectNewMarkerIconSheet";

export function AddIconBottomSheet() {
  return (
    <View>
      <SelectNewMarkerIconSheet />
      <EditNewMarkerInfoSheet />
    </View>
  );
}
