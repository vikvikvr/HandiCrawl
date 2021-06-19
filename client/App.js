import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Text, View } from "react-native";
import { MapRender } from "./components/MapRender/MapRender";
import { getMarkers, getBounds } from "./services/apiServices";
import { styles } from "./App.styles.js";
import { SearchBar } from "./components/SearchBar";
import { ModalHandler } from "./containers/ModalHandler";
import { useSubject } from "./hooks/useSubject";
import { hasLocationPermission, getUserLocation } from "./services/mapService";
import {
  bounds$,
  currentCoordinates$,
  markers$,
} from "./services/stateService";

export default function App() {
  const [markers, setMarkers] = useSubject(markers$);
  const [bounds, setBounds] = useSubject(bounds$);
  const [_, setCurrentCoordinates] = useSubject(currentCoordinates$);
  const [appIsReady, setAppIsReady] = useState(false);

  //load custom fonts for the app
  // useAppFonts();
  useEffect(setupMarkers, []);

  function setupMarkers() {
    (async function () {
      try {
        // get GPS permission
        const hasPermission = await hasLocationPermission();
        if (!hasPermission) {
          return;
        }
        // get GPS position
        const { latitude, longitude } = await getUserLocation();
        setCurrentCoordinates({ latitude, longitude });
        // calculate square bounds
        const bounds = getBounds({ latitude, longitude });
        setBounds(bounds);
        // get only markers within bounds
        const markers = await getMarkers();
        setMarkers(markers);
        setAppIsReady(true);
      } catch (u_u) {
        console.log("error in prepare0", u_u);
      }
    })();
  }

  if (!appIsReady) return null;

  return (
    <View onLayout={SplashScreen.hideAsync}>
      <View style={styles.container}>
        <View style={[styles.metaContainer]}>
          <AppHeader />
          <MapRender />
          <SearchBar />
          <TopRightInfoIcon />
        </View>
      </View>
      <ModalHandler />
      <StatusBar style="light" />
    </View>
  );
}

function AppHeader() {
  return (
    <View style={styles.topMainView}>
      <Text style={[styles.generalText, styles.topMainViewText]}>
        Click on a marker to get and edit information
      </Text>
      <Text style={[styles.generalText, styles.topMainViewText]}>
        Press on a location to add a marker
      </Text>
    </View>
  );
}

//TODO: have a default region if the user doesn't give permission
