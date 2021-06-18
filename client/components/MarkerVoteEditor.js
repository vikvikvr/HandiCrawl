//the component that renders the score and upVotes/Downvotes when clicking
//on an existing marker
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import thumbUpIcon from "../assets/activeThumbsUp.png";
import thumbDownIcon from "../assets/thumbsup.png";
const iconDimension = 50;

export default function MarkerVoteEditor({ currentCallout }) {
  const [up, setUp] = useState(false);
  const [down, setDown] = useState(false);
  const [score, setScore] = useState(currentCallout.score);
  useEffect(handleScoreChange, [up, down]);

  function handleScoreChange() {
    const entranceScore = currentCallout.score;
    if (up) setScore(entranceScore + 1);
    if (down) setScore(entranceScore - 1);
    if (!up && !down) setScore(entranceScore);
  }

  function voteIcon(voteDirection) {
    if (voteDirection === "up") {
      setUp(!up);
      if (down) setDown(false);
    } else {
      setDown(!down);
      if (up) setUp(false);
    }
  }

  const imageSource = up ? thumbUpIcon : thumbDownIcon;

  return (
    <View style={styles.thumbsContainer}>
      <TouchableOpacity onPress={() => voteIcon("up")}>
        <Image
          source={imageSource}
          style={[styles.thumbsIcon]}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={[styles.generalText, styles.scoreText]}>{score}</Text>
      <TouchableOpacity onPress={() => voteIcon("down")}>
        <Image
          source={imageSource}
          style={[styles.thumbsIcon]}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    flexDirection: "column",
    borderRadius: 20,
    width: "90%",
    height: 200,
    position: "absolute",
    bottom: "35%",
    backgroundColor: "#EAF0F2",
    paddingTop: "4%",
    borderRadius: 20,
    paddingLeft: "1%",
    paddingRight: "1%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    elevation: 23,
  },
  bubbleIcon: {
    flexDirection: "column",
    borderColor: "#476C7D",
    borderWidth: 5,
    borderRadius: 10,
  },
  descriptionText: {
    fontSize: 20,
    fontFamily: "K2D_400Regular_Italic",

    textAlign: "center",
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
  generalText: {
    fontFamily: "K2D_600SemiBold",
    color: "#1C333E",
  },
  iconImgContainer: {
    borderWidth: 5,
    borderRadius: 40,
    overflow: "hidden",
    borderColor: "#476C7D",
    zIndex: 1,
    top: -115,
    elevation: 15,
    justifyContent: "center",
    alignItems: "center",
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
    top: 60,
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
    fontSize: 20,
    fontFamily: "K2D_800ExtraBold",
    textAlign: "center",
  },
  scoreText: {
    fontSize: 30,
    textAlign: "center",
    width: 30,
  },
  thumbsContainer: {
    flexDirection: "row",
    zIndex: 1,
    left: 5,
    top: 10,
    position: "absolute",
    justifyContent: "space-between",
    alignItems: "center",
    width: "30%",
  },
  thumbsIcon: {
    width: iconDimension - 10,
    height: iconDimension - 10,
  },
  trashIcon: {
    width: iconDimension - 20,
    height: iconDimension - 20,
    marginRight: "20%",
  },
});
