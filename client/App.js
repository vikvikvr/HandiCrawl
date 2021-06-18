import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Text, View, Image, TextInput, StyleSheet } from "react-native";
import { MapRender } from "./containers/MapRender";
import * as Location from "expo-location";
import { getMarkers, getBounds } from "./services/apiServices";
import infoIcon from "./assets/infoIcon.png";
import { useAppFonts, styles } from "./App.styles.js";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SearchBar } from "./components/SearchBar";
import { ModalHandler } from "./containers/ModalHandler";
import { useSubject } from "./hooks/useSubject";
import { currentModal$ } from "./services/modalService";

export default function App() {
  // state that holds the current center position the user is on
  const [region, setRegion] = useState(null);
  // state that holds the array of markers to render in the area
  const [markers, setMarkers] = useState([]);
  // state that holds the bounds of the area containing the current markers
  const [storedBounds, setStoredBounds] = useState({});
  // state that... is not ever checked now that I look at the code.
  const [stillInBounds, setStillInBounds] = useState(true);

  // very important state that will keep the splashscreen as long as we are fetching
  const [appIsReady, setAppIsReady] = useState(false);
  // holds the threshold of altitude above which the icons should stop appearing on the map
  const maxZoom = 0.022;

  //load custom fonts for the app
  // useAppFonts();

  useEffect(prepare, []);
  useEffect(updateMapElements, [region]);
  useEffect(handleCurrentIconChange, [currentIconSelected]);

  // get the first area to populate based on user location
  function prepare() {
    (async function () {
      try {
        //get user permission to access location
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          return;
        }
        // get user location
        const { markers } = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        });
        // initiate the first states based on user location
        setStoredBounds(getBounds(markers));
        setRegion(markers);
        // getMarkers returns the content of fakedb
        let settingCoords = await getMarkers(markers);
        setMarkers(settingCoords);
        // Everything is loaded, we're good to go =)
        setAppIsReady(true);
      } catch (u_u) {
        console.warn(u_u);
        // TODO: error page
      }
    })();
  }

  //function to get new icons from the API service. called when need new icons
  async function getNewIcons(region) {
    console.log("entering getnewicons");
    const newCoords = await getMarkers(region);
    if (newCoords) {
      setMarkers(newCoords);
      setStillInBounds(true);
    }
  }

  function handleCurrentIconChange() {
    if (!currentIconSelected) return;
    const iconSelected = coords.find((coord) => {
      return (
        coord.latitude === currentIconSelected.latitude &&
        coord.longitude === currentIconSelected.longitude
      );
    });
    setCurrentCallout(iconSelected);
  }

  // when user moves the map region on the map, call the function that handles what to do
  // we might need to get new markers
  async function updateMapElements() {
    if (!region) return;
    //At launch, the map loads coordinate around an area beyong the simple screen view. this below checks if we're
    //still in the area when the user drags the map. If we're still in them, we don't call the database
    const isStillInBounds =
      region.latitude > storedBounds.minLat &&
      region.latitude < storedBounds.maxLat &&
      region.longitude > storedBounds.minLong &&
      region.longitude < storedBounds.maxLong;

    if (isStillInBounds && appIsReady) {
      console.log("not sending request");
      setStillInBounds(true);
      return;
    }
    //If the user zooms out too much, the icons should disappear (setMarkers([])
    const isZoomedTooFar =
      region.latitudeDelta && region.latitudeDelta > maxZoom;

    if (isZoomedTooFar) {
      setMarkers([]);
      setStoredBounds({});
      console.log("too far, not fetching");
      return;
    }
    //if all the checks above fail, it means we need to store the new bounds of the area
    //and call the database to populate the area with the appropriate markers(if any)
    setStoredBounds(getBounds(region));
    setStillInBounds(false);
    await getNewIcons(region);
  }

  if (!appIsReady) return null;

  return (
    <View onLayout={SplashScreen.hideAsync}>
      <View style={styles.container}>
        <View style={[styles.metaContainer]}>
          <AppHeader />
          <MapRender
            region={region}
            markers={markers}
            setRegion={setRegion}
            setMarkers={setMarkers}
            maxZoom={maxZoom}
            stillInBounds={stillInBounds}
          />
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
