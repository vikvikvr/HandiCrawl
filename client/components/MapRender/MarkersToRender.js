import React from "react";
import { useSubject } from "../../hooks/useSubject";
import { markers$, region$ } from "../../services/stateService";
import { View, Image } from "react-native";
import MapView from "react-native-maps";
import { styles } from "./styles";
import { renderIcon } from "../../services/iconFactory";
import { maxZoom } from "../../services/mapService";
import { showMarkerInfo } from "../../services/markerService";
import { getIconSize } from "../../utils/utils";

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
      {markers.map((coordItem) => {
        return (
          <View
            key={coordItem.latitude + coordItem.longitude}
            style={styles.markerContainer}
          >
            <MapView.Marker
              style={styles.marker}
              coordinate={coordItem}
              anchor={{ x: 0.5, y: 0.5 }}
              onPress={showMarkerInfo}
            >
              <View style={markerImageContainer}>
                <Image
                  resizeMode="contain"
                  style={markerImage}
                  source={renderIcon(coordItem.icon)}
                />
              </View>
              <MapView.Callout tooltip={false} />
            </MapView.Marker>
          </View>
        );
      })}
    </View>
  );
}
