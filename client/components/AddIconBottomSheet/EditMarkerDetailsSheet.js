import React from "react";

export function EditMarkerDetailsSheet() {
  function handleSend() {
    const newCoordinate = {
      placeName: placeName,
      icon: selectedIconString,
      latitude: iconEvent.coordinate.latitude,
      longitude: iconEvent.coordinate.longitude,
      description: description === "" ? "" : description,
      score: 0,
    };
    setCoords([...coords, newCoordinate]);
    postNewCoord(newCoordinate);
    setBottomSheetVisible(false);
    setDetailsBottomSheetVisible(false);
  }

  return (
    <BottomSheet
      visible={detailsBottomSheetVisible}
      onBackButtonPress={() => toggleBottomSheet()}
      onBackdropPress={() => toggleBottomSheet()}
    >
      <View style={styles.bottomAddIconView}>
        <MarkerIcon />
        <EditPlaceNameInput />
        <EditPlaceDescriptionInput />
        <SendButton onPress={handleSend} />
      </View>
    </BottomSheet>
  );
}

function MarkerIcon() {
  return (
    <>
      <View style={styles.addIconImgContainer}>
        <Image
          source={renderIcon(selectedIconString)}
          resizeMode="contain"
          style={styles.addIconImg}
        />
      </View>
      <Text style={[styles.generalText, styles.iconTitleText]}>
        {renderTitle(selectedIconString)}
      </Text>
    </>
  );
}

function SendButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={[styles.generalText, styles.textStyle]}>Send</Text>
    </TouchableOpacity>
  );
}

export function EditPlaceNameInput() {
  return (
    <View style={styles.locationContainer}>
      <Text style={[styles.generalText, styles.propertyText]}>
        Address detected. Feel free to modify it =)
      </Text>
      <View style={styles.editContainer}>
        <TextInput
          onChangeText={(text) => setChangePlaceName(text)}
          value={placeName}
          style={[styles.generalText, styles.iconText, styles.placeNameText]}
        />
      </View>
    </View>
  );
}

export function EditPlaceDescriptionInput() {
  return (
    <View style={styles.locationContainer}>
      <Text style={[styles.generalText, styles.propertyText]}>
        Provide some details to help even more =)
      </Text>
      <View style={[styles.editContainer, styles.descriptionContainer]}>
        <TextInput
          multiline={true}
          onChangeText={(text) => onChangeDescription(text)}
          value={description}
          style={[styles.generalText, styles.iconText, styles.descriptionText]}
        />
      </View>
    </View>
  );
}
