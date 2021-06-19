import React from "react";
import MapView from "react-native-maps";
import { View } from "react-native";
import { useSubject } from "../../hooks/useSubject";
import { region$ } from "../../services/stateService";
import {
  startToAddNewMarker,
  updateMarkersBasedOnPosition,
} from "../../services/markerService";
import { styles, customStyle } from "./styles";
import { MarkersToRender } from "./MarkersToRender";

export function MapRender() {
  const [region] = useSubject(region$);

  const initialRegion = {
    ...region,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      <MapView
        onRegionChangeComplete={updateMarkersBasedOnPosition}
        style={styles.map}
        initialRegion={initialRegion}
        loadingEnabled={true}
        provider={MapView.PROVIDER_GOOGLE}
        customMapStyle={customStyle}
        showsUserLocation={true}
        showsMyLocationButton={true}
        rotateEnabled={false}
        onLongPress={startToAddNewMarker}
      >
        <MarkersToRender />
      </MapView>
    </View>
  );
}
