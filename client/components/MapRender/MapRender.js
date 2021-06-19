import React from "react";
import MapView from "react-native-maps";
import { View } from "react-native";
import { useSubject } from "../../hooks/useSubject";
import {
  pressedCoordinates$,
  region$,
  setSheet,
} from "../../services/stateService";
import { styles, customStyle } from "./styles";
import { MarkersToRender } from "./MarkersToRender";

export function MapRender() {
  const [region, setRegion] = useSubject(region$);
  // from outside:
  // - coords(markersArray)
  // - stillInBonds
  // - maxZoom
  const [_, setPressedCoordinates] = useSubject(pressedCoordinates$);

  function handleMapLongPress(e) {
    if (region.latitudeDelta < maxZoom) {
      // TODO
      setPressedCoordinates(e.nativeEvent.coordinate);
      // use selectedMarker instead

      // e.nativeEvent.coordinate =>
      // {latitude, longitude}

      setSheet("select-new-marker-icon");
    }
  }

  const initialRegion = {
    ...region,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      <MapView
        onRegionChangeComplete={setRegion}
        style={styles.map}
        initialRegion={initialRegion}
        loadingEnabled={true}
        provider={MapView.PROVIDER_GOOGLE}
        customMapStyle={customStyle}
        showsUserLocation={true}
        showsMyLocationButton={true}
        rotateEnabled={false}
        onLongPress={handleMapLongPress}
      >
        <MarkersToRender />
      </MapView>
    </View>
  );
}
