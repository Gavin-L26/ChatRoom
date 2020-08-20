import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import useStatusBar from "../hooks/useStatusBar";

const ThirdScreen = (props) => {
  useStatusBar("dark-content");

  return (
    <View style={styles.screen}>
      <Text> ~~ This is the ThirdScreen ~~ </Text>
      <Text> I am under construction </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ThirdScreen;
