import React, { useEffect } from "react";
import { BottomSheet, View } from "react-native";
import { EditIconInfoHeader } from "./EditIconInfoHeader";
import { EditPlaceNameInput } from "./EditPlaceNameInput";
import { EditPlaceDescriptionInput } from "./EditPlaceDescriptionInput";
import { SendButton } from "./SendButton";
import { setSheet } from "../../services/stateService";
import { tryToGetPlaceName } from "../../services/mapService";
import { styles } from "./styles";

// video 1:11
export function EditNewMarkerInfo() {
  useEffect(tryToGetPlaceName, []);

  return (
    <BottomSheet
      onBackButtonPress={() => setSheet("")}
      onBackdropPress={() => setSheet("")}
    >
      <View style={styles.bottomAddIconView}>
        <EditIconInfoHeader />
        <EditPlaceNameInput />
        <EditPlaceDescriptionInput />
        <SendButton />
      </View>
    </BottomSheet>
  );
}
