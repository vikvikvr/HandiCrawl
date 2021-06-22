import React from "react";
import { View } from "react-native";

function MapView({ children }) {
  return <View testID="map">{children}</View>;
}

MapView.Marker = function ({ coordinate, onPress, children }) {
  const event = {
    nativeEvent: {
      coordinate,
    },
  };

  return (
    <View testID="map-marker" onPress={() => onPress(event)}>
      {children}
    </View>
  );
};

MapView.Callout = function () {
  return <View testID="map-callout">callout</View>;
};

export default MapView;
