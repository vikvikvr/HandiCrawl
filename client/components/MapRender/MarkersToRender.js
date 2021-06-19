import React from "react";
import { useSubject } from "../../hooks/useSubject";
import { markers$, region$ } from "../../services/stateService";
import { View } from "react-native";
import MapView from "react-native-maps";
import { styles } from "./styles";
import { maxZoom } from "../../services/mapService";
import { showMarkerInfo } from "../../services/markerService";
import { getIconSize } from "../../utils/utils";
import { MarkerIcon } from "../../components/MarkerIcon/MarkerIcon";

//create a marker for each element in the markers array
export function MarkersToRender() {
  const [markers] = useSubject(markers$);
  const [region] = useSubject(region$);

  const tooZoomedOut = region.latitudeDelta > maxZoom;

  if (tooZoomedOut) {
    return null;
  }

  const iconSize = getIconSize(region);

  // style object
  const markerImageContainer = {
    width: 50,
    height: 50,
    backgroundColor: "yelloww",
    alignItems: "center",
    justifyContent: "center",
  };

  // style object
  const markerImage = {
    width: iconSize,
    height: iconSize,
    shadowColor: "#000",
  };

  return (
    <View>
      {markers.map((marker) => {
        return (
          <View
            key={marker.latitude + marker.longitude}
            style={styles.markerContainer}
          >
            <MapView.Marker
              style={styles.marker}
              coordinate={marker}
              anchor={{ x: 0.5, y: 0.5 }}
              onPress={showMarkerInfo}
            >
              <MarkerIcon iconName={marker.icon} />
              <MapView.Callout tooltip={false} />
            </MapView.Marker>
          </View>
        );
      })}
    </View>
  );
}
