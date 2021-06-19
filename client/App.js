import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Text, View } from "react-native";
import { MapRender } from "./components/MapRender/MapRender";
import { styles, useAppFonts } from "./App.styles.js";
import { SearchBar } from "./components/SearchBar";
import { ModalHandler } from "./containers/ModalHandler";
import { SheetHandler } from "./containers/SheetHandler";
import { setupMarkers } from "./services/mapService";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  useAppFonts();
  useEffect(setup, []);

  function setup() {
    setupMarkers()
      .then(() => setAppIsReady(true))
      .catch((u_u) => console.log("error in prepare0", u_u));
  }

  if (!appIsReady) {
    return null;
  }

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
      <SheetHandler />
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
