import React from "react";
import MapView from "react-native-maps";
import { View } from "react-native";
import { useSubject } from "../../hooks/useSubject";
import {
  currentCoordinates$,
  bounds$,
  markers$,
  setSheet,
  selectedMarker$,
} from "../../services/stateService";
import { isWithinBounds } from "../../services/mapService";
import { getBounds, getMarkers } from "../../services/apiServices";
import { styles, customStyle } from "./styles";
import { MarkersToRender } from "./MarkersToRender";

export function MapRender() {
  const [markers, setMarkers] = useSubject(markers$);
  const [marker, setMarker] = useSubject(selectedMarker$);
  const [bounds, setBounds] = useSubject(bounds$);
  const [coordinates, setCoordinates] = useSubject(currentCoordinates$);

  function startToAddNewMarker(event) {
    const { latitude, longitude, latitudeDelta } = e.nativeEvent.coordinate;

    if (latitudeDelta > maxZoom) {
      console.log("too zoomed out to add marker");
      return;
    }

    setMarker({ ...marker, latitude, longitude });
    setSheet("select-new-marker-icon");
  }

  async function updateMarkersBasedOnPosition({ latitude, longitude }) {
    setCoordinates({ latitude, longitude });

    const inBounds = isWithinBounds();

    if (!inBounds) {
      // create new bounds
      const newBounds = getBounds({ latitude, longitude });
      setBounds(newBounds);

      try {
        // load new markers
        const newMarkers = await getMarkers();
        setMarkers(newMarkers);
      } catch (error) {
        console.log("failed to get new markers");
      }
    }
  }

  const initialRegion = {
    ...coordinates,
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
