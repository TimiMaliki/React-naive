import {
  StyleSheet,
  TextInput,
  StatusBar,
  Text,
  Switch,
  View,
  Button
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    // paddingTop: StatusBar.currentHeight,
  },

});

export default function HomeScreen() {
  
  return (
    <SafeAreaView style={styles.container}>
  
    </SafeAreaView>
  );
}


 