import { Dimensions, StyleSheet } from "react-native";
import {
  useFonts,
  K2D_300Light_Italic,
  K2D_400Regular_Italic,
  K2D_500Medium_Italic,
  K2D_600SemiBold,
  K2D_800ExtraBold,
} from "@expo-google-fonts/dev";

export function useAppFonts() {
  useFonts({
    K2D_300Light_Italic,
    K2D_400Regular_Italic,
    K2D_500Medium_Italic,
    K2D_600SemiBold,
    K2D_800ExtraBold,
  });
}

const myScreen = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
  widthRatio: 1,
  heightRatio: 1,
};

export const styles = StyleSheet.create({
  bottomMainView: {
    backgroundColor: "#EAF0F2",
    width: "100%",
  },
  container: {
    backgroundColor: "#1C333E",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "column",

    width: myScreen.width * myScreen.widthRatio,
    height: myScreen.height * myScreen.heightRatio,
  },
  container2: {},
  metaContainer: {
    backgroundColor: "#EAF0F2",
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    height: "85%",
  },
  generalText: {
    fontFamily: "K2D_600SemiBold",
    color: "#1C333E",
  },
  italicText: {
    fontFamily: "K2D_500Medium_Italic",
  },
  infoContainerContainer: {
    position: "absolute",
    right: 30,
    top: 40,
  },
  infoIcon: {
    height: 40,
    width: 40,

    zIndex: 3,
  },
  searchBarContainer: {
    backgroundColor: "#F3F6F7",
    position: "absolute",
    width: "80%",
    height: "8%",
    zIndex: 1,
    elevation: 10,
    right: "10%",
    bottom: "15%",
    borderRadius: 100,

    flexDirection: "row",
    alignItems: "center",
  },
  searchBarIcon: {
    marginLeft: 14,
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
  },
  searchBarIconImg: {
    height: "70%",
  },
  searchBarTextContainer: {
    justifyContent: "center",

    flexDirection: "row",
    height: "100%",
  },
  searchBarText: {
    marginLeft: 10,
    alignItems: "center",
    fontSize: 20,
  },
  splash: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#A8EBF4",
    resizeMode: "cover",
  },
  topMainView: {
    width: "100%",
    position: "absolute",
    top: -60,
    zIndex: 1,
  },
  topMainViewText: {
    textAlign: "center",
    fontSize: 15,
    color: "#9FBBC5",
  },
});
