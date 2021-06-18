import React, { useEffect } from "react";
import { BottomSheet, View } from "react-native";
import { EditIconInfoHeader } from "./EditIconInfoHeader";
import { EditPlaceNameInput } from "./EditPlaceNameInput";
import { EditPlaceDescriptionInput } from "./EditPlaceDescriptionInput";
import { SendButton } from "./SendButton";
import { useSubject } from "../../hooks/useSubject";
import { selectedMarker$, setSheet } from "../../services/stateService";
import { styles } from "./styles";

// video 1:11
export function EditNewMarkerInfoSheet() {
  const [marker, setMarker] = useSubject(selectedMarker$);
  useEffect(toggleBottomSheet, []);

  function updatePlaceName(placeName = "") {
    setMarker({ ...marker, placeName });
  }

  function updatePlaceDescription(placeDescription = "") {
    setMarker({ ...marker, placeDescription });
  }

  function saveMarker() {
    // TODO: add to state
    // add to db
    setSheet("");
  }

  function hasNumber(string) {
    return /\d/.test(string);
  }

  function toggleBottomSheet() {
    // when it loads, try to get location description
    // automatically from coordinates
    //Get the street address thanks to reverseGeoCode
    Location.reverseGeocodeAsync(pressedCoordinates).then((location) => {
      const { name, street } = location[0];
      let locationName = name;
      if (hasNumber(name)) {
        locationName = street + " " + name;
      }
      //if the location is a named place (like 'House of Parliament') render this
      //otherwise render street + number
      setChangePlaceName(locationName);
      setDetailsBottomSheetVisible(true);
    });
  }

  return (
    <BottomSheet
      onBackButtonPress={() => setSheet("")}
      onBackdropPress={() => setSheet("")}
    >
      <View style={styles.bottomAddIconView}>
        <EditIconInfoHeader iconName={marker.iconName} />
        <EditPlaceNameInput
          placeName={marker.placeName}
          onChangeText={updatePlaceName}
        />
        <EditPlaceDescriptionInput
          placeDescription={marker.placeDescription}
          onChangeText={updatePlaceDescription}
        />
        <SendButton onPress={saveMarker} />
      </View>
    </BottomSheet>
  );
}
