//Modal that appear after you clicked on the "edit" icon
//Allows you to rewrite the marker's information
//To do so, it will render the information held by the temporaryHandiMarker
//(which at first is a copy of the currentCallou data)
//Any subsequent modifications is done on the temporaryHandiMarker
//if the user presses the "send update" button, the temporaryHandiMarker overwrites
//the old marker data (both in the remote database and in the client coords array)
import {
  Text,
  View,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect } from "react";
import { renderIcon, renderTitle } from "../services/iconFactory";
import { sendUpdateCoord } from "../services/apiServices";

const iconDimension = 50;

export default function EditModal({
  markerDetailsModalVisible,
  setMarkerDetailsModalVisible,
  currentCallout,
  editModalScreen,
  setEditModalScreen,
  toggleCalloutToEdit,
  temporaryHandiMarker,
  setTemporaryHandiMarker,
  setIconEditModalScreen,
  setCoords,
}) {
  if (!currentCallout) return null;
  useEffect(populateHandiMarker, []);

  function populateHandiMarker() {
    if (!temporaryHandiMarker) {
      setTemporaryHandiMarker(currentCallout);
    }
  }

  return (
    <Modal
      transparent={true}
      visible={editModalScreen}
      onRequestClose={toggleCalloutToEdit}
      animationType="slide"
    >
      <View style={styles.bubble}>
        <Title />
        <GeneralText>Edit icon...</GeneralText>
        <EditIconRow />
        <GeneralText>Edit location...</GeneralText>
        <EditLocationNameInput />
        <GeneralText>Edit description...</GeneralText>
        <EditDescriptionInput />
        <SendButton />
      </View>
    </Modal>
  );
}

function EditIconRow() {
  const iconName = temporaryHandiMarker
    ? temporaryHandiMarker.icon
    : currentCallout.icon;

  return (
    <View style={styles.editContainer}>
      <View style={styles.iconImgContainer}>
        <Image source={renderIcon(iconName)} style={styles.generalIcon} />
        <Text style={styles.iconText}>{renderTitle(iconName)}</Text>
      </View>
      <TouchableOpacity onPress={() => setIconEditModalScreen(true)}>
        <Image
          source={require("../assets/edit.png")}
          style={[styles.trashIcon, styles.editIcon]}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}

function EditLocationNameInput() {
  function handleTextChange(text) {
    setTemporaryHandiMarker({
      ...temporaryHandiMarker,
      placeName: text,
    });
  }

  const inputText = temporaryHandiMarker
    ? temporaryHandiMarker.placeName
    : currentCallout.placeName;

  return (
    <View style={styles.editContainer}>
      <TextInput
        style={[styles.generalText, styles.iconText, styles.placeNameText]}
        onChangeText={handleTextChange}
        onFocus={(whatisit) => console.log("in focus", whatisit)}
      >
        {inputText}
      </TextInput>
    </View>
  );
}

function EditDescriptionInput() {
  function handleTextChange(text) {
    setTemporaryHandiMarker({
      ...temporaryHandiMarker,
      description: text,
    });
  }

  const inputText = temporaryHandiMarker
    ? temporaryHandiMarker.description
    : currentCallout.description;

  return (
    <View style={[styles.editContainer, styles.descriptionContainer]}>
      <TextInput
        multiline={true}
        style={[styles.generalText, styles.iconText, styles.placeNameText]}
        onChangeText={handleTextChange}
      >
        {inputText}
      </TextInput>
    </View>
  );
}

function SendButton() {
  function handlePress() {
    sendUpdateCoord(temporaryHandiMarker);
    setCoords(makeNewCoords);
    setTemporaryHandiMarker(null);
    setMarkerDetailsModalVisible(false);
    setEditModalScreen(false);
  }

  function makeNewCoords(prevCoords) {
    const newCoords = prevCoords.map((coordItem) => {
      if (coordItem.id === temporaryHandiMarker.id) return temporaryHandiMarker;
      else return coordItem;
    });
    return newCoords;
  }

  return (
    <View style={styles.sendButton}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={[styles.generalText, styles.sendButtonUpdate]}>
          Send Update
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function GeneralText({ children }) {
  return <Text style={[styles.generalText, styles.titleText]}>{children}</Text>;
}

function Title() {
  return <Text style={[styles.generalText, styles.titleText]}></Text>;
}

const styles = StyleSheet.create({
  bubble: {
    flexDirection: "column",
    borderRadius: 20,
    width: "90%",
    height: 310,
    position: "absolute",
    bottom: "30%",
    backgroundColor: "#EAF0F2",
    paddingTop: "0%",
    borderRadius: 20,
    alignSelf: "center",
    elevation: 23,
  },
  bubbleIcon: {
    flexDirection: "column",
    borderColor: "#476C7D",
    borderWidth: 5,
    borderRadius: 10,
  },
  descriptionContainer: {
    height: 60,
  },
  descriptionText: {
    backgroundColor: "#EAF0F2",
    borderRadius: 10,
    width: "80%",
    alignSelf: "flex-start",
    height: "100%",
    textAlignVertical: "top",
  },
  editBubble: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1,
    alignItems: "flex-end",
    position: "absolute",
    zIndex: 1,
    top: 24,
    right: 10,
    alignSelf: "flex-end",
  },
  editContainer: {
    backgroundColor: "#CFE3E3",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 6,
    padding: 1,
    justifyContent: "space-between",
    elevation: 5,
  },
  editIcon: {
    width: iconDimension - 30,
    height: iconDimension - 20,
    bottom: "1%",
    marginRight: "2%",
  },
  generalIcon: {
    width: iconDimension,
    height: iconDimension,
  },
  generalText: {
    fontFamily: "K2D_600SemiBold",
    color: "#1C333E",
  },
  iconImgContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconText: {
    paddingLeft: 5,
  },
  iconTitle: {
    alignSelf: "center",
    zIndex: 1,
    position: "absolute",
    top: 23,
  },
  iconTitleText: {
    color: "#B7CCD3",
  },
  locationContainer: {
    flexDirection: "column",
  },
  locationTop: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: "1%",
  },
  middleBubble: {
    flex: 4,
    padding: "1%",
    zIndex: 0,
    top: 80,
    width: "100%",
    position: "absolute",
    borderTopColor: "#dcdddc",
    borderTopWidth: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {},
  placeNameText: {
    backgroundColor: "#EAF0F2",
    borderRadius: 10,
    width: "80%",
    alignSelf: "flex-start",
    height: "100%",
    padding: 1,
  },
  propertyText: {
    paddingLeft: 15,
    fontFamily: "K2D_300Light_Italic",
    fontSize: 10,
  },
  scoreText: {
    fontSize: 30,
  },
  sendButton: {
    backgroundColor: "#75B0AF",
    alignSelf: "center",
    marginTop: 5,
    height: "15%",
    borderRadius: 10,
    justifyContent: "center",
    elevation: 3,
  },
  sendButtonUpdate: {
    margin: 4,
    color: "#DEE7EA",
    paddingLeft: 2,
    paddingRight: 2,
  },
  titleText: {
    textAlign: "center",
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#dcdddc",
    marginBottom: 1,
  },
  thumbsContainer: {
    overflow: "hidden",
    flexDirection: "row",
    zIndex: 1,
    left: 10,
    top: 10,
    flex: 1,
    position: "absolute",
    justifyContent: "space-between",
    alignItems: "center",
    width: "30%",
  },
  thumbsIcon: {
    width: "30%",
  },
  trashIcon: {
    width: iconDimension - 20,
    height: iconDimension - 20,
    marginRight: "20%",
  },
});
