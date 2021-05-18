import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MentionHashtagTextView from "react-native-mention-hashtag-text";
import { Alert } from "react-native";

export default function App() {
  const mentionHashtagClick = (text) => {
    console.log("Clicked to + " + text);
  };
  return (
    <View style={styles.container}>
      <MentionHashtagTextView mentionHashtagPress={mentionHashtagClick}>
        This is a text with a @mention and #hashtag. You can add more @mentions
        like @john @foe or #hashtags like #ReactNative
      </MentionHashtagTextView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
