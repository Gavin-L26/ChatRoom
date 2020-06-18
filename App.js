import React from "react";
import { StyleSheet, Text, View } from "react-native";

import * as firebase from "firebase";

import AppNavigator from './navigation/AppNavigator';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC6PmdF76X3Mbp21ol8pGEiZCO8A8W_sQQ",
  authDomain: "chatroom-13955.firebaseapp.com",
  databaseURL: "https://chatroom-13955.firebaseio.com",
  projectId: "chatroom-13955",
  storageBucket: "chatroom-13955.appspot.com",
};

// Make sure Firebase is only called once when we refresh.
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return <AppNavigator/> ;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
