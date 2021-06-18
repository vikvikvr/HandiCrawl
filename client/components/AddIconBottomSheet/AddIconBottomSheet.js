import { BottomSheet } from "react-native-btr";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  useWindowDimensions,
} from "react-native";
import * as Location from "expo-location";
import { renderIcon, renderTitle, allIcons } from "../services/iconFactory";
import { postNewCoord } from "../services/apiServices";
import { NewMarkerIcon } from "./NewMarkerIcon";
import { SheetHeader } from "./SheetHeader";
// import AddDetailsBottomSheet from './AddDetailsBottomSheet';

export default function AddIconBottomSheet({
  iconEvent,
  bottomSheetVisible,
  setBottomSheetVisible,
  setCoords,
  coords,
}) {
  const [detailsBottomSheetVisible, setDetailsBottomSheetVisible] =
    useState(false);
  const [placeName, setChangePlaceName] = useState("location name");
  const [description, onChangeDescription] = useState("");
  const [selectedIconString, setSelectedIconString] = useState("");
  const currentWidth = useWindowDimensions().width;
  const paddingPercent = 5;
  const effectivePadding = Math.floor((paddingPercent * currentWidth) / 100);

  function hasNumber(string) {
    return /\d/.test(string);
  }

  function handleNewMarkerPress(iconString) {
    setSelectedIconString(iconString);
    toggleBottomSheet();
  }

  // Modal is now another Bottom sheet. Need to fix the name
  // When you activate toggle modal you enter the 2nd bottom sheet which
  //is used to give a description about an icon
  async function toggleBottomSheet() {
    if (!detailsBottomSheetVisible) {
      //Get the street address thanks to reverseGeoCode
      const location = await Location.reverseGeocodeAsync({
        latitude: iconEvent.coordinate.latitude,
        longitude: iconEvent.coordinate.longitude,
      });
      const { name, street } = location[0];
      let locationName = name;
      if (hasNumber(name)) {
        locationName = street + " " + name;
      }
      //if the location is a named place (like 'House of Parliament') render this
      //otherwise render street + number
      setChangePlaceName(locationName);
      console.log("getting here");
      setDetailsBottomSheetVisible(true);
    } else {
      setDetailsBottomSheetVisible(false);
    }
  }

  return (
    <View>
      <SelectIconSheet />
      <AddIconBottomSheet />
    </View>
  );
}

const styles = StyleSheet.create({
  sheet: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  addIconImg: {
    width: 60,
    height: 60,
    // marginBottom: 10,
    // position: "absolute",
    // top: -30,
  },
  addIconImgContainer: {
    borderWidth: 5,
    borderRadius: 40,
    overflow: "hidden",
    borderColor: "#476C7D",
    zIndex: 1,
    top: -40,
    position: "absolute",
    elevation: 15,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "orange",
    // padding: "1%",
  },
  bottomAddIconView: {
    backgroundColor: "#EAF0F2",
    // width: "100%",
    height: 320,
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    // paddingLeft: 50,
    // paddingRight: 50,
    paddingTop: 30,
    paddingBottom: 10,
    // marginRight: 10,
    // marginLeft: 10,
    position: "absolute",
    zIndex: 0,
    width: "100%",
  },
  bottomNavigationView: {
    backgroundColor: "#EAF0F2",
    // width: "100%",
    height: 400,
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    // paddingLeft: 50,
    // paddingRight: 50,
    paddingTop: 10,
    paddingBottom: 10,
    // marginRight: 10,
    // marginLeft: 10,
    position: "relative",
    zIndex: 0,
  },
  button: {
    // borderRadius: 20,
    backgroundColor: "#75B0AF",
    alignSelf: "center",
    marginTop: 15,
    // marginBottom: 5,
    height: "15%",
    borderRadius: 10,
    justifyContent: "center",
    elevation: 3,
    width: "20%",
  },
  buttonsContainer: {
    flex: 3,
    flexWrap: "wrap",
    flexDirection: "row",
    paddingLeft: effectivePadding,
    paddingRight: effectivePadding,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 400,
  },

  descriptionContainer: {
    height: 60,
  },
  descriptionText: {
    backgroundColor: "#EAF0F2",
    // backgroundColor: "blue",
    borderRadius: 10,
    width: "80%",
    // alignSelf: "flex-start",
    height: "95%",
    textAlignVertical: "top",
    padding: 2,
  },
  editContainer: {
    backgroundColor: "#CFE3E3",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    // borderWidth: 2,
    // borderColor: "#476C7D",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 0,
    padding: 1,
    justifyContent: "space-between",
    elevation: 5,
  },
  generalText: {
    fontFamily: "K2D_600SemiBold",
    color: "#1C333E",
    textAlign: "center",
  },
  handiMarkerContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    borderStyle: "solid",
    // borderColor: "blue",
    // borderWidth: 1,
    marginRight: 4,
    marginBottom: 4,
    width: 100,
    position: "relative",
    zIndex: 0,
  },
  header: {
    // fontWeight: "bold",
    fontSize: 20,
    // backgroundColor: "yellow",
    width: "100%",
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#dcdddc",
    marginBottom: 1,
  },
  iconImg: {
    width: 60,
    height: 60,
    marginBottom: 3,
    // backgroundColor: "orange",
  },
  iconImgContainer: {
    elevation: 10,
    zIndex: 1,
    position: "relative",
  },
  iconText: {
    paddingLeft: 5,
  },
  iconTitleText: {
    color: "#B7CCD3",
    // backgroundColor: 'yellow'
    width: "100%",
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#dcdddc",
    marginBottom: 1,
  },
  locationContainer: {
    // backgroundColor: 'blue',

    width: "100%",
  },
  markerImgWrapper: {
    // position: 'absolute',
    zIndex: 1,
    elevation: 10,
  },
  placeNameText: {
    backgroundColor: "#EAF0F2",
    // backgroundColor: "blue",
    borderRadius: 10,
    width: "80%",
    // alignSelf: "flex-start",
    height: 35,
    textAlign: "left",
  },
  propertyText: {
    paddingLeft: 15,
    fontFamily: "K2D_300Light_Italic",
    fontSize: 10,
    marginBottom: 2,
    marginTop: 10,
    textAlign: "left",
  },
  textStyle: {
    color: "white",
    // fontWeight: "bold",
    textAlign: "center",
    color: "#DEE7EA",
  },
  title: {
    flex: 1,
  },
});
