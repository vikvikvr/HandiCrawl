import React from "react";
import { useSubject } from "../../hooks/useSubject";
import { markers$, region$ } from "../../services/stateService";
import { View, Image } from "react-native";
import MapView from "react-native-maps";
import { styles } from "./styles";
import { renderIcon } from "../../services/iconFactory";

//create a marker for each element in the markers array
export function MarkersToRender() {
  const [markers] = useSubject(markers$);
  const [region] = useSubject(region$);

  const shouldRenderNewMarkers =
    markers.length !== 0 &&
    markers !== undefined &&
    region.latitudeDelta < maxZoom &&
    !stillInBonds;

  if (!shouldRenderNewMarkers) {
    return null;
  }

  //adapt the size of the icons on the map depending on the zoom level
  function getIconSize(region) {
    if (!region) return;
    if (region.latitudeDelta > 0.004) return 30;
    else return 50;
  }

  let iconSize = getIconSize(region);

  function handleMarkerPress(e) {
    // TODO: store coordinates in state
    // open new marker modal
    // e.nativeEvent.coordinate
  }

  const markerImageContainer = {
    width: 50,
    height: 50,
    backgroundColor: "yelloww",
    alignItems: "center",
    justifyContent: "center",
  };

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
              onPress={handleMarkerPress}
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
