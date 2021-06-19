import React, { useEffect } from "react";
import { BottomSheet, View } from "react-native";
import { EditIconInfoHeader } from "./EditIconInfoHeader";
import { EditPlaceNameInput } from "./EditPlaceNameInput";
import { EditPlaceDescriptionInput } from "./EditPlaceDescriptionInput";
import { SendButton } from "./SendButton";
import { selectedMarker$, setSheet } from "../../services/stateService";
import { styles } from "./styles";
import { useSubject } from "../../hooks/useSubject";
import { reverseGeocodeAsync } from "expo-location";

// video 1:11
export function EditNewMarkerInfoSheet() {
  const [marker, setMarker] = useSubject(selectedMarker$);
  useEffect(tryToGetPlaceName, []);

  function tryToGetPlaceName() {
    const coordinates = {
      latitude: marker.latitude,
      longitude: marker.longitude,
    };
    reverseGeocodeAsync(coordinates).then((addresses) => {
      const { name, street } = addresses[0];
      const hasNumber = /\d/.test(name);
      const placeName = hasNumber ? street + " " + name : name;

      setMarker({ ...marker, placeName });
    });
  }

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
