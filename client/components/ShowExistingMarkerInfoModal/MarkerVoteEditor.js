import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import thumbUpIcon from "../../assets/activeThumbsUp.png";
import thumbDownIcon from "../../assets/thumbsup.png";
import { styles } from "./styles";
import { useSubject } from "../../hooks/useSubject";
import { selectedMarker$ } from "../../services/stateService";

// vote up / down an existing marker
export function MarkerVoteEditor() {
  const [marker, setMarker] = useSubject(selectedMarker$);

  function voteMarker(amount = 0) {
    // TODO: save also to db and all markers in state
    const score = marker.score + amount;
    setMarker({ ...marker, score });
  }

  return (
    <View style={styles.thumbsContainer}>
      <VoteUpIcon voteMarker={voteMarker} />
      <Text style={[styles.generalText, styles.scoreText]}>{marker.score}</Text>
      <VoteDownIcon voteMarker={voteMarker} />
    </View>
  );
}

function VoteUpIcon({ voteMarker }) {
  return (
    <TouchableOpacity onPress={() => voteMarker(1)}>
      <Image
        source={thumbUpIcon}
        style={styles.thumbsIcon}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}

function VoteDownIcon({ voteMarker }) {
  return (
    <TouchableOpacity onPress={() => voteMarker(-1)}>
      <Image
        source={thumbDownIcon}
        style={styles.thumbsIcon}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}
